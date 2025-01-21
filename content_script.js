walk(document.body);

function walk(node)
{
    // I stole this function from here:
    // http://is.gd/mwZp7E

    var child, next;

    switch ( node.nodeType )
    {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while ( child )
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }

    if ( typeof node.tagName === 'undefined' && node ) {
        return;
    }
    if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea') {
        return;
    }
}

function handleText(textNode)
{
    var v = textNode.nodeValue;

    // Original, from 2017
    v = v.replace(/\bISIS\b/g, "Evil Losers");
    v = v.replace(/\bHillary Clinton\b/g, "Crooked Hillary");
    v = v.replace(/\bPresident Trump\b/g, "God Emperor Trump");
    v = v.replace(/\bDonald Trump\b/g, "God Emperor Trump");

    // Inspired by https://babylonbee.com/news/10-more-things-trump-plans-to-rename
    v = v.replace(/\bStatue of Liberty\b/g, "Lady Melania");
    v = v.replace(/\bGreenland\b/g, "Big, beautiful AmericaLand ");
    v = v.replace(/\China\b/g, "Chy-na");

    // Added, January 2025
    v = v.replace(/\bGulf of Mexico\b/g, "Gulf of America");
    v = v.replace(/\bCanada \b/g, "Canada (America's 51st State) ");
    v = v.replace(/\bDenali \b/g, "Mount McKinley");

    textNode.nodeValue = v;
}
