async function init(token, url)
{
  if (token === undefined || url === '')
  {
    console.log('No token or url found');
    return;
  }

  const mergeRequest = await getMergeRequest(token, url);
  const pipeline = await getMergeRequestPipeline(mergeRequest[0].project_id, mergeRequest[0].iid, token, url);

  if (mergeRequest.length === 0)
  {
    console.log('No merge request found');
    return;
  }

  ["main.js", "polyfills.js", "runtime.js"].forEach(function(src) {
    let s = document.createElement('script');
    s.type = 'module';
    s.src = chrome.runtime.getURL(src);
    s.onload = function() {
      this.parentNode.removeChild(this);
    };
    try
    {
      (document.head || document.documentElement).appendChild(s);
    }
    catch (e)
    {
      console.log(e);
    }
  });

  let div = document.createElement("tron-x-gitlab");
  div.setAttribute("mergerequest", JSON.stringify(mergeRequest));
  div.setAttribute("pipeline", JSON.stringify(pipeline));
  div.setAttribute("version", chrome.runtime.getManifest().version);
  let main = document.getElementById('fieldset_default_mainFields');
  main.parentNode.insertBefore(div, main.nextSibling);
}

async function getMergeRequest(token, url)
{
  const ret = await fetch(url + 'merge_requests?with_merge_status_recheck=true&scope=all&state=opened&in=title&search=' + parseInt(document.getElementById('default,attachmentExternalIdentifier_fieldvalue').children[0].innerHTML.substring(1), 10), {
    method: 'GET', headers: {
      'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token
    }
  });
  return await ret.json();
}

async function getMergeRequestPipeline(projectId, mergeRequestIid, token, url)
{
  const ret = await fetch(url + 'projects/' + projectId + '/merge_requests/' + mergeRequestIid + '/pipelines', {
    method: 'GET', headers: {
      'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token
    }
  });
  return await ret.json();
}

chrome.storage.sync.get({token: '', url: ''}, (items) => init(items.token, items.url));

