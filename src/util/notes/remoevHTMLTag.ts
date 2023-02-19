export const removeHTMLTag = (html: string) => html.replace(/(<([^>]+)>)/gi, '')
