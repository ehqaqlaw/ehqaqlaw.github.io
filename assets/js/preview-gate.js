/* بوابة المعاينة — بيئة الاختبار فقط (لا يُرفع إلى النطاق العام).
   يتحقق من رمز الدخول القادم من صفحة «دخول الأعضاء» على ehqaqlaw.sa، ويحفظه في هذا المتصفح،
   ويحوّل من لا يملكه إلى الصفحة الرئيسية العامة. */
(function(){
  var HASH='fad9d67085c84a92ea0a4da47b3995eb2dff70bdb8c7b199caec9a16dbe5899a';
  var HOME='https://ehqaqlaw.sa/';
  var KEY='ehqaq_pv';

  var st=document.createElement('style');
  st.id='pv-hide';
  st.textContent='html{visibility:hidden !important}';
  document.head.appendChild(st);

  function hex(buf){ return Array.prototype.map.call(new Uint8Array(buf), function(b){ return ('0'+b.toString(16)).slice(-2); }).join(''); }
  function fail(){ location.replace(HOME); }

  var m=/[#&]k=([0-9a-f]{64})/.exec(location.hash);
  var t=m?m[1]:null;
  if(!t){ try{ t=localStorage.getItem(KEY); }catch(e){} }
  if(!t || !window.crypto || !crypto.subtle){ fail(); return; }

  crypto.subtle.digest('SHA-256', new TextEncoder().encode(t)).then(function(d){
    if(hex(d)===HASH){
      try{ localStorage.setItem(KEY,t); }catch(e){}
      if(m){ try{ history.replaceState(null,'',location.pathname+location.search); }catch(e){} }
      st.parentNode.removeChild(st);
    } else { fail(); }
  }, fail);
})();
