
export function getTracking(blockedArray) {
    return function(dispatch) {
    console.log('hit inside getTracking')
    console.log(`blockedArray2 --- ${JSON.stringify(blockedArray)}`)

    let domain = '';

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(`tabs -- ${JSON.stringify(tabs)}`)
        const tab = tabs[0];
        const url = new URL(tab.url)
        domain = url.hostname
        console.log(`domain 1 - ${domain}`)
        console.log(`type - ${typeof domain}`)
        dispatch({ type: 'UPDATE_TEXT', text: domain });
        dispatch({ type: 'SET_BLOCKED_ARRAY', blockedArray: ['www.youtube.com','www.reddit.com'] });

        if ( blockedArray.find(blockedSite => blockedSite === domain)) {
           redirect(domain)
        }
      })
}

}

function redirect(domain) {
    console.log(`hit inside redirect`)
    console.log(`domain 2 - ${domain}`)
    // this redirect doesn't work how it needs to
    // it opens a new tab and doesn't close other one
    chrome.tabs.update({
        url: 'https://google.com',
        active: true
      });
}
  