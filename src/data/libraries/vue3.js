export const data = {
  name: "Vue 3",
  references: [],
  library: [
    {
      id: 1,
      question: "What are the changes of Vue 3?",
      answer: `
      <ol style="list-style: auto; padding: 0 20px;">
<li>Composition API (Now built-in)</li>
<li>
  <p>Multiple root elements (Template syntax )</p>
  <h3>Vue 3:</h3>
  <div class="code-space">
  <p><span class="token tag"><span class="token punctuation">&lt;</span>template<span class="token punctuation">&gt;</span></span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &lt;</span>p<span class="token punctuation">&gt;</span></span><span> Count: {{ count }} </span><span class="token tag"><span class="token punctuation">&lt;/</span>p<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &lt;</span>button <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increment<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span> Increment </span><span class="token tag"><span class="token punctuation">&lt;/</span>button<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &lt;</span>button <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>decrement<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span> Decrement</span><span class="token tag"><span class="token punctuation">&lt;/</span>button<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&lt;/</span>template<span class="token punctuation">&gt;</span></span></p>
  </div>
  <h3>Vue 2:</h3>
  <div class="code-space">
  <p><span class="token tag"><span class="token punctuation">&lt;</span>template<span class="token punctuation">&gt;</span></span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &lt;</span>div <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>counter<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &nbsp; &lt;</span>p<span class="token punctuation">&gt;</span></span><span> Count: {{ count }} </span><span class="token tag"><span class="token punctuation">&lt;/</span>p<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &nbsp; &lt;</span>button <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increment<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span> Increment </span><span class="token tag"><span class="token punctuation">&lt;/</span>button<span class="token punctuation">&gt;</span></span></p>
<p><span></span><span class="token tag"><span class="token punctuation">&nbsp; &nbsp; &lt;</span>button <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>decrement<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span> Decrement</span><span class="token tag"><span class="token punctuation">&lt;/</span>button<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &lt;/</span>div<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&lt;/</span>template<span class="token punctuation">&gt;</span></span></p>
  </div>
</li>
<li>
<h3>Suspense</h3>
<div class="code-space">
<p><span> </span><span class="token tag"><span class="token punctuation">&lt;</span>Suspense<span class="token punctuation">&gt;</span></span></p>
<p><span>&nbsp;&nbsp;</span><span class="token tag"><span class="token punctuation">&lt;</span>template <span class="token attr-name">#default</span><span class="token punctuation">&gt;</span></span></p>
<p><span>&nbsp; &nbsp; </span><span class="token tag"><span class="token punctuation">&lt;</span>div <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in articleList<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &nbsp; &nbsp; &lt;</span>article<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;</span>h2<span class="token punctuation">&gt;</span></span><span>{{ item.title }}</span><span class="token tag"><span class="token punctuation">&lt;/</span>h2<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;</span>p<span class="token punctuation">&gt;</span></span><span>{{ item.body }}</span><span class="token tag"><span class="token punctuation">&lt;/</span>p<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &nbsp; &nbsp; &lt;/</span>article<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &nbsp; &lt;/</span>div<span class="token punctuation">&gt;</span></span><span> </span><span class="token tag"><span class="token punctuation">&lt;/</span>template<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &lt;</span>template <span class="token attr-name">#fallback</span><span class="token punctuation">&gt;</span></span><span> Articles loading... </span><span class="token tag"><span class="token punctuation">&lt;/</span>template<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&lt;/</span>Suspense<span class="token punctuation">&gt;</span></span></p>
</div>
</li>
<li>Multiple V-models
  <div class="code-space">
  <p><span class="token tag"><span class="token punctuation">&lt;</span>template<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &lt;</span>survey-form <span class="token attr-name"><span class="token namespace">v-model:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>age</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span> </span><span class="token tag"><span class="token punctuation">&lt;/</span>survey-form<span class="token punctuation">&gt;</span></span></p>
<p><span> </span><span class="token tag"><span class="token punctuation">&lt;/</span>template<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation"></span></span></p>
<p><span>//SurveyForm.vue</span></p>
<p><span class="token tag"><span class="token punctuation">&lt;</span>template<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &nbsp;&lt;</span>div<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &nbsp; &nbsp; &lt;</span>label<span class="token punctuation">&gt;</span></span><span>Name: </span><span class="token tag"><span class="token punctuation">&lt;/</span>label<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &nbsp; &nbsp; &lt;</span>input <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateName($event.target.value)<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span><span class="token tag"><span class="token punctuation">&lt;</span>label<span class="token punctuation">&gt;</span></span><span>Age: </span><span class="token tag"><span class="token punctuation">&lt;/</span>label<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &nbsp; &lt;</span>input <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateAge($event.target.value)<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&nbsp; &nbsp;&lt;/</span>div<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&lt;/</span>template<span class="token punctuation">&gt;</span></span><span> </span></p>
<p><span class="token tag"><span class="token punctuation">&lt;</span>script<span class="token punctuation">&gt;</span></span></p>
<p><span class="token script"><span class="token language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> </span></span></p>
<p><span class="token script"><span class="token language-javascript">&nbsp; props<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> String<span class="token punctuation">,</span> age<span class="token operator">:</span> Number <span class="token punctuation">}</span><span class="token punctuation">,</span> </span></span></p>
<p><span class="token script"><span class="token language-javascript"><span class="token function">&nbsp; setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span></span></p>
<p><span class="token script"><span class="token language-javascript"><span class="token keyword">&nbsp; &nbsp; const</span> <span class="token function-variable function">updateName</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'update:name'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">}</span> </span></span></p>
<p><span class="token script"><span class="token language-javascript"><span class="token keyword">&nbsp; &nbsp; const</span> <span class="token function-variable function">updateAge</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'update:age'</span><span class="token punctuation">,</span> <span class="token operator">+</span>value<span class="token punctuation">)</span> <span class="token punctuation">}</span> </span></span></p>
<p><span class="token script"><span class="token language-javascript"><span class="token keyword">&nbsp; &nbsp; return</span> <span class="token punctuation">{</span> updateName<span class="token punctuation">,</span> updateAge <span class="token punctuation">}</span> </span></span></p>
<p><span class="token script"><span class="token language-javascript"><span class="token punctuation">&nbsp; }</span> </span></span></p>
<p><span class="token script"><span class="token language-javascript"><span class="token punctuation">}</span> </span></span></p>
<p><span class="token tag"><span class="token punctuation">&lt;/</span>script<span class="token punctuation">&gt;</span></span></p>
  </div>
</li>
<li>Better Reactivity</li>
</ol>
      `
    },
    {
      id: 2,
      question: "Compare ref() and reactive()?",
      answer: `<a href="https://dmitripavlutin.com/ref-reactive-differences-vue/" target="_blank">5 Must-Know Differences Between ref() and reactive() in Vue</a>
        <ul>
          <li><h4 style="font-weight: bold;">1. Primitive values:</h4> 
          <p><code>ref()</code><span>&nbsp;</span><em>can</em><span>&nbsp;store primitive values, while&nbsp;</span><code>reactive()</code><span>&nbsp;</span><em>cannot</em><span>.</span></p>
          <p><span>The reason why&nbsp;</span><code>reactive()</code><span>&nbsp;works only with objects is in Vue's reactivity implementation.&nbsp;</span><a href="https://github.com/vuejs/core/blob/main/packages/reactivity/src/reactive.ts#L212" target="_blank" rel="noopener noreferrer">Vue uses Proxies</a><span>&nbsp;to intercept property changes on objects. And proxies do not work with primitives.</span></p>
          </li>
          <li><h4 style="font-weight: bold;">2. Accessing reactive data:</h4>
          <p><code>ref()</code><span>&nbsp;data is accessed using&nbsp;</span><em><code>value</code><span>&nbsp;</span>property</em><span>&nbsp;(exception: in templates the ref is auto-unwrapped), while&nbsp;</span><code>reactive()</code><span>&nbsp;data is accessed&nbsp;</span><em>directly</em><span>.</span></p>
          <li/>
          <li><h4 style="font-weight: bold;">3. Reassigning data:</h4>
          <p><code>ref()</code><span>&nbsp;value can be reassigned entirely to a new object, while a&nbsp;</span><code>reactive()</code><span>&nbsp;cannot.</span></p>
          <li/>
          <li><h4 style="font-weight: bold;">4. Typing:</h4>
          <p><span>refs returned by&nbsp;</span><code>ref(value: T)</code><span>&nbsp;are of type&nbsp;</span><code>Ref&lt;T&gt;</code><span>, while reactive objects returned by&nbsp;</span><code>reactive(object: T)</code><span>&nbsp;are of type&nbsp;</span><code>T</code><span>&nbsp;(exception: refs in reactive are unwrapped).</span></p>
          <li/>
          <li><h4 style="font-weight: bold;">5. Watching:</h4>
          <p><code>watch()</code><span>&nbsp;by default watches&nbsp;</span><em>only direct<span>&nbsp;</span><code>.value</code><span>&nbsp;</span>change</em><span>&nbsp;of&nbsp;</span><code>ref()</code><span>, while doing a&nbsp;</span><em>deep</em><span>&nbsp;watch of a&nbsp;</span><code>reactive()</code><span>&nbsp;object.</span></p>
          <li/>
        </ul>
      `

    },
    {
      id: 3,
      question: "When we should use ref() or reactive()?",
      answer:
      `
      <p>While there isn't a strict rule, still, there are situations when using a specific reactivity function is preferable:</p>
<ol>
<li>- If you need a reactive primitive value, then using<span>&nbsp;</span><code>ref()</code><span>&nbsp;</span>is the right choice.</li>
<li>- If you need a reactive<span>&nbsp;</span><a href="https://en.wikipedia.org/wiki/Value_object" target="_blank" rel="noopener noreferrer">value object</a><span>&nbsp;</span>(an object whose properties usually don't change), then using<span>&nbsp;</span><code>ref()</code><span>&nbsp;</span>is a good option.</li>
<li>- If you need a reactive mutable object, and you want to track even the deeply mutated properties of that object, then using<span>&nbsp;</span><code>reactive()</code><span>&nbsp;</span>is a good option.</li>
</ol>
      `
    },
  ],
};
