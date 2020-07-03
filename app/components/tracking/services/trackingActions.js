
// export function getTracking(blockedArray) {
//     return function(dispatch) {
//     console.log('hit inside getTracking')
//     console.log(`blockedArray2 --- ${JSON.stringify(blockedArray)}`)

//     let domain = '';

//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         console.log(`tabs -- ${JSON.stringify(tabs)}`)
//         const tab = tabs[0];
//         const url = new URL(tab.url)
//         domain = url.hostname
//         console.log(`domain 1 - ${domain}`)
//         console.log(`type - ${typeof domain}`)
//         dispatch({ type: 'UPDATE_TEXT', text: domain });
//         dispatch({ type: 'SET_BLOCKED_ARRAY', blockedArray: ['www.youtube.com','www.reddit.com'] });

//         if ( blockedArray.find(blockedSite => blockedSite === domain)) {
//            redirect(domain)
//         }
//       })
//       console.log('hit here');
//       // test();
//     //   chrome.tabs.addListener(function(tabId, changeInfo, tab) {
//     //     console.info("This is the url of the tab = " + changeInfo.url);
//     //     alert('hit inside test!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     //     // do stuff with that url here....
//     // });

// HERE vvvv this function is failing when it gets to the dispatch
export function onActiveTabChange(tabs) {
  
  const tab = tabs[0];
  const url = new URL(tab.url)
  const domain = url.hostname
  alert(`domain 1 - ${domain}`)
  // dispatch({ type: 'SET_BLOCKED_ARRAY', blockedArray: ['www.youtube.com','www.reddit.com'] });

  // if ( blockedArray.find(blockedSite => blockedSite === domain)) {
  //    redirect(domain)
  // }
  return function(dispatch) {
    alert('hit before dispatch')
    dispatch({ type: 'UPDATE_TEXT', text: domain });
    alert('hit after dispatch')
    }
}



function redirect(domain) {
    console.log(`hit inside redirect`)
    console.log(`domain 2 - ${domain}`)
    chrome.tabs.update({
        url: 'https://google.com',
        active: true
      });
}
  