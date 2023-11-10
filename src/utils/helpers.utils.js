export function classifyUserMessageIndex(message) {
	// Regular expressions for different categories
	const greetingRegex = /\b(hi|hello|hey|greetings)\b/i;
	const billingRegex =
		/\b(bill|billing|payment|invoice|charge|price|pricing|plan)\b/i;
	const accountRegex =
		/\b(change|update|password|email|email|phone|number|name)\b/i;
	const installationRegex =
		/\b(install|installation|setup|configure|software|Skype|application|how to|make a call|video call)\b/i;
	const troubleshootingRegex =
		/\b(troubleshoot|issue|problem|error|fix|unable|video call|audio call|call quality)\b/i;

	const loginRegex = /\b(login|signin|sign in|log in|authentication)\b/i;

	// Check for different categories
	if (greetingRegex.test(message)) {
		return 0; // Greeting
	} else if (billingRegex.test(message)) {
		return 1; // Billing Inquiry
	} else if (accountRegex.test(message)) {
		return 2; // Account Management
	} else if (installationRegex.test(message)) {
		return 3; // Software Installation / How To
	} else if (troubleshootingRegex.test(message)) {
		return 4; // Troubleshooting
	} else if (loginRegex.test(message)) {
		return 5; // Troubleshooting
	} else {
		return -1; // Other
	}
}
