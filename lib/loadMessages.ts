export async function loadMessages(locale:string) {
    try {
      const messages = await import(`../messages/${locale}.json`);
      return messages.default;
    } catch (error: unknown) {
      console.warn(`Messages for locale '${locale}' not found, falling back to 'en'.`,error);
      const messages = await import(`../messages/en.json`);
      return messages.default;
    }
  }