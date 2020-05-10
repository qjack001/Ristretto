
export default
{ 
    get(key)
    {
        if(window.localStorage.getItem(key) == null)
        {
            // default values
            
            if(key == 'content')
            {
                return "<h1>Hello!</h1><p>Welcome to <a href='https://en.wikipedia.org/wiki/Ristretto'>Ristretto</a>, a tiny notes app for when you just need to jot something down. Click the &#9881; above to see a list of supported <code>Markdown</code> syntax and to change the colour scheme.</p><blockquote>Note: Ristretto uses localStorage to store your notes. While this improves security (what you write will never be sent to a server; it stays on your device), it also makes the note somewhat ephemeral—the browser may clear the site's data after a period of time. Avoid storing any important documents here.</blockquote>";
            }
            else if(key == 'theme')
            {
                return "light";
            }
            else
            {
                return "";
            }
        }

        return window.localStorage.getItem(key);
    },

    set(key, value)
    {
        window.localStorage.setItem(key, value);
    }
};