export function getTracking(id) {
    return function(dispatch) {
    console.log('hit inside getTracking')

    chrome.windows.getCurrent(function(w) {
        chrome.tabs.getSelected(w.id,
        function (response){
            let text = response.url
            console.log(`response -- ${response}`)
            dispatch({ type: 'UPDATE_TEXT', text });
        });
        });
    }
    
}
  