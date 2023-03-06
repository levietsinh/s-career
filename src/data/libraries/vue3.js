export const data = {
  name: "Vue 3",
  references: [],
  library: [
    {
      id: 1,
      question: "What are the changes of Vue 3?",
      answer: `Updating....`
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
