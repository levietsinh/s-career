export const data = {
  name: "VueJs",
  references: [
    {
      name: "Github - VueJs Interview Questions & Answers",
      link: "https://github.com/sudheerj/vuejs-interview-questions",
    },
  ],
  library: [
    {
      question: "What are the caveats of array changes detection?",
      answer: `
      <ul class="content">
<li class="h2-title">
<p dir="auto">Vue cannot detect changes for the array in the below two cases,</p>
<ol dir="auto">
<li>When you directly set an item with the index,For example,
<div class="highlight highlight-source-js notranslate position-relative overflow-auto" dir="auto">
<pre class="code-space"><span class="pl-s1">vm</span><span class="pl-kos">.</span><span class="pl-c1">todos</span><span class="pl-kos">[</span><span class="pl-s1">indexOfTodo</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-s1">newTodo</span></pre>
</div>
</li>
<li>When you modify the length of the array, For example,
<div class="highlight highlight-source-js notranslate position-relative overflow-auto" dir="auto">
<pre class="code-space"><span class="pl-s1">vm</span><span class="pl-kos">.</span><span class="pl-c1">todos</span><span class="pl-kos">.</span><span class="pl-c1">length</span> <span class="pl-c1">=</span> <span class="pl-s1">todosLength</span></pre>
</div>
</li>
</ol>
<p dir="auto">You can overcome both the caveats using<span>&nbsp;</span><code>set</code><span>&nbsp;</span>and<span>&nbsp;</span><code>splice</code><span>&nbsp;</span>methods, Let's see the solutions with an examples,</p>
<p dir="auto"><strong>First use case solution</strong></p>
<div class="highlight highlight-source-js notranslate position-relative overflow-auto" dir="auto">
<pre class="code-space"><span class="pl-c">// Vue.set</span>
<span class="pl-v">Vue</span><span class="pl-kos">.</span><span class="pl-en">set</span><span class="pl-kos">(</span><span class="pl-s1">vm</span><span class="pl-kos">.</span><span class="pl-c1">todos</span><span class="pl-kos">,</span> <span class="pl-s1">indexOfTodo</span><span class="pl-kos">,</span> <span class="pl-s1">newTodoValue</span><span class="pl-kos">)</span>
<span class="pl-kos">(</span><span class="pl-s1">or</span><span class="pl-kos">)</span>
<span class="pl-c">// Array.prototype.splice</span>
<span class="pl-s1">vm</span><span class="pl-kos">.</span><span class="pl-c1">todos</span><span class="pl-kos">.</span><span class="pl-en">splice</span><span class="pl-kos">(</span><span class="pl-s1">indexOfTodo</span><span class="pl-kos">,</span> <span class="pl-c1">1</span><span class="pl-kos">,</span> <span class="pl-s1">newTodoValue</span><span class="pl-kos">)</span></pre>
</div>
<p dir="auto"><strong>Second use case solution</strong></p>
<div class="highlight highlight-source-js notranslate position-relative overflow-auto" dir="auto">
<pre class="code-space"><span class="pl-s1">vm</span><span class="pl-kos">.</span><span class="pl-c1">todos</span><span class="pl-kos">.</span><span class="pl-en">splice</span><span class="pl-kos">(</span><span class="pl-s1">todosLength</span><span class="pl-kos">)</span></pre>
</div>
</li>
</ul>
      `
    },
    {
      question: "What are the caveats of object changes detection?",
      answer: `
      <ul class="content">
<li class="h2-title">
<p dir="auto">Vue cannot detect changes for the object in property addition or deletion.</p>
<p dir="auto">Lets take an example of user data changes,</p>
<div class="highlight highlight-source-js notranslate position-relative overflow-auto" dir="auto">
<pre class="code-space"><span class="pl-k">var</span> <span class="pl-s1">vm</span> <span class="pl-c1">=</span> <span class="pl-k">new</span> <span class="pl-v">Vue</span><span class="pl-kos">(</span><span class="pl-kos">{</span>
  <span class="pl-c1">data</span>: <span class="pl-kos">{</span>
    <span class="pl-c1">user</span>: <span class="pl-kos">{</span>
      <span class="pl-c1">name</span>: <span class="pl-s">'John'</span>
    <span class="pl-kos">}</span>
  <span class="pl-kos">}</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span>

<span class="pl-c">// &#180;vm.name&#180; is now reactive</span>

<span class="pl-s1">vm</span><span class="pl-kos">.</span><span class="pl-c1">user</span><span class="pl-kos">.</span><span class="pl-c1">email</span> <span class="pl-c1">=</span> <span class="pl-s1">john</span>@<span class="pl-s1">email</span><span class="pl-kos">.</span><span class="pl-c1">com</span> <span class="pl-c">// &#180;vm.user.email&#180; is NOT reactive</span></pre>
<div class="zeroclipboard-container position-absolute right-0 top-0"><clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="var vm = new Vue({
  data: {
    user: {
      name: 'John'
    }
  }
})

// &#96;vm.name&#96; is now reactive

vm.user.email = john@email.com // &#96;vm.user.email&#96; is NOT reactive" role="button" tabindex="0"><svg aria-hidden="true" height="16" viewbox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg></clipboard-copy></div>
</div>
<p dir="auto">You can overcome this scenario using the Vue.set(object, key, value) method or Object.assign(),</p>
<div class="highlight highlight-source-js notranslate position-relative overflow-auto" dir="auto">
<pre class="code-space"><span class="pl-v">Vue</span><span class="pl-kos">.</span><span class="pl-en">set</span><span class="pl-kos">(</span><span class="pl-s1">vm</span><span class="pl-kos">.</span><span class="pl-c1">user</span><span class="pl-kos">,</span> <span class="pl-s">'email'</span><span class="pl-kos">,</span> <span class="pl-s">'john@email.com'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
<span class="pl-c">// (or)</span>
<span class="pl-s1">vm</span><span class="pl-kos">.</span><span class="pl-c1">user</span> <span class="pl-c1">=</span> <span class="pl-v">Object</span><span class="pl-kos">.</span><span class="pl-en">assign</span><span class="pl-kos">(</span><span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">,</span> <span class="pl-s1">vm</span><span class="pl-kos">.</span><span class="pl-c1">user</span><span class="pl-kos">,</span> <span class="pl-kos">{</span>
  <span class="pl-c1">email</span>: <span class="pl-s1">john</span>@<span class="pl-s1">email</span><span class="pl-kos">.</span><span class="pl-c1">com</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span></pre>
</div>
</li>
</ul>
      `
    },
    {
      question: "What are the supported System Modifier Keys?",
      answer: `
      <ul class="content">
        <li class="h2-title">
        <p dir="auto">Vue supports below modifiers to trigger mouse or keyboard event listeners when the corresponding key is pressed,</p>
        <ol dir="auto">
        <li>.ctrl</li>
        <li>.alt</li>
        <li>.shift</li>
        <li>.meta</li>
        </ol>
        <p dir="auto">Lets take an example of control modifier with click event,</p>
        <div class="highlight highlight-text-html-vue notranslate position-relative overflow-auto" dir="auto">
        <pre class="code-space"><span class="pl-c">&lt;!-- Ctrl + Click --&gt;</span>
        &lt;<span class="pl-ent">div</span> @<span class="pl-e">click</span>.<span class="pl-e">ctrl</span>=<span class="pl-s1"><span class="pl-pds">"</span>doSomething<span class="pl-pds">"</span></span>&gt;Do something&lt;/<span class="pl-ent">div</span>&gt;</pre>
        </div>
        </li>
      </ul>
      `
    },
    {
      question: "What are the supported Mouse Button Modifiers?",
      answer: `
      <ul class="content">
        <li class="h2-title">
        <p dir="auto">Vue supports below mouse button modifiers</p>
        <ol dir="auto">
        <li>.left</li>
        <li>.right</li>
        <li>.middle</li>
        </ol>
        <p dir="auto">For example, the usage of<span>&nbsp;</span><code>.right</code><span>&nbsp;</span>modifier as below</p>
        <div class="highlight highlight-text-html-vue notranslate position-relative overflow-auto" dir="auto">
        <pre class="code-space"> &lt;<span class="pl-ent">button</span>
          <span class="pl-e">v-if</span>=<span class="pl-s1"><span class="pl-pds">"</span>button <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>right<span class="pl-pds">'</span></span><span class="pl-pds">"</span></span>
          <span class="pl-e">v-on</span>:<span class="pl-e">mousedown</span>.<span class="pl-e">right</span>=<span class="pl-s1"><span class="pl-pds">"</span>increment<span class="pl-pds">"</span></span>
          <span class="pl-e">v-on</span>:<span class="pl-e">mousedown</span>.<span class="pl-e">left</span>=<span class="pl-s1"><span class="pl-pds">"</span>decrement<span class="pl-pds">"</span></span>
        /&gt;</pre>
        </div>
        </li>
      </ul>
      `
    },
    {
      question: "What's your name?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio et deserunt dolores quisquam, tempore culpa dicta natus blanditiis labore recusandae vitae, repellat vero. Nulla veritatis eligendi non ab. Vel?",
    },
  ],
};
