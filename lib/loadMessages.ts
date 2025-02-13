export async function loadMessages(locale:string) {
    try {
      const messages = await import(`../messages/${locale}.json`);
      return messages.default;
    } catch (error:any) {
      console.warn(`Messages for locale '${locale}' not found, falling back to 'en'.`);
      const messages = await import(`../messages/en.json`);
      return messages.default;
    }
  }