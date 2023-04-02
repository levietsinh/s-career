export const data = {
  name: "Javascript",
  references: [
    {
      name: "Github - JS Interview Questions & Answers",
      link: "https://github.com/sudheerj/javascript-interview-questions",
    },
    {
      name: "Những bài toán Logic (Phần 1)",
      link: "https://codelearn.io/sharing/30-cau-phong-van-javascript-phan-1",
    },
    {
      name: "Reverse a String",
      link: "https://jsfiddle.net/tmx7ys3j/2/",
    },
    {
      name: "Factorialize (Giai thừa hóa) a Number",
      link: "https://jsfiddle.net/bxf1y3ta/4/",
    },
    {
      name: "Check for Palindromes (Chuỗi mà khi Reverse thì không đổi nghĩa)",
      link: "https://jsfiddle.net/w7380rbs/1/",
    },
    {
      name: "Find the Longest Word in a String",
      link: "https://jsfiddle.net/jh0m5fov/",
    },
    {
      name: "Title Case a Sentence (I'm a little tea pot => I'm A Little Tea Pot.)",
      link: "https://jsfiddle.net/zvmw3pxt/",
    },
    {
      name: "Truncate a string",
      link: "https://jsfiddle.net/2gx913dv/",
    },
    {
      name: "The same element array",
      link: "https://jsfiddle.net/2gx913dv/1/",
    },
  ],
  library: [
    {
      question: "What are the array detection mutation methods?",
      answer: `
      <p dir="auto">As the name suggests, mutation methods modifies the original array.</p>
<p dir="auto">Below are the list of array mutation methods which trigger view updates.</p>
<ol dir="auto" style="list-style: auto; padding-left: 24px;">
<li>push()</li>
<li>pop()</li>
<li>shift()</li>
<li>unshift()</li>
<li>splice()</li>
<li>sort()</li>
<li>reverse()</li>
</ol>
<p dir="auto">If you perform any of the above mutation method on the list then it triggers view update. For example, push method on array named 'items' trigger a view update,</p>
<pre class="code-space"><span class="pl-s1">vm</span><span class="pl-kos">.</span><span class="pl-c1">todos</span><span class="pl-kos">.</span><span class="pl-en">push</span><span class="pl-kos">(</span><span class="pl-kos">{</span> <span class="pl-c1">message</span>: <span class="pl-s">'Baz'</span> <span class="pl-kos">}</span><span class="pl-kos">)</span></pre>      
`,
    },
    {
      question: "What are the array detection non-mutation methods?",
      answer: `
      <p dir="auto">The methods which do not mutate the original array but always return a new array are called non-mutation methods.</p>
<p dir="auto">Below are the list of non-mutation methods,</p>
<ol dir="auto" style="list-style: auto; padding-left: 24px;">
<li>filter()</li>
<li>concat()</li>
<li>slice()</li>
</ol>
<p dir="auto">For example, lets take a todo list where it replaces the old array with new one based on status filter,</p>
<div class="highlight highlight-source-js notranslate position-relative overflow-auto" dir="auto">
<pre class="code-space"><span class="pl-s1">vm</span><span class="pl-kos">.</span><span class="pl-c1">todos</span> <span class="pl-c1">=</span> <span class="pl-s1">vm</span><span class="pl-kos">.</span><span class="pl-c1">todos</span><span class="pl-kos">.</span><span class="pl-en">filter</span><span class="pl-kos">(</span><span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">todo</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
  <span class="pl-k">return</span> <span class="pl-s1">todo</span><span class="pl-kos">.</span><span class="pl-c1">status</span><span class="pl-kos">.</span><span class="pl-en">match</span><span class="pl-kos">(</span><span class="pl-pds"><span class="pl-c1">/</span>Completed<span class="pl-c1">/</span></span><span class="pl-kos">)</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span></pre>
</div>
<div>This approach won't re-render the entire list due to VueJS implementation.</div>
      `,
    },
    {
      question:
        "What are the new features in Javascript ES6 (ECMAScript 2015)?",
      answer: `
      <ul class="content">
<li class="h2-title" style=""><br />
<h3 id="1-let-and-const-keywords-"><strong>1. let and const keywords :</strong></h3>
<p>The keyword "let" enables the users to define variables and on the other hand, "const" enables the users to define constants. Variables were previously declared using "var" which had function scope and were hoisted to the top. It means that a variable can be used before declaration. But, the "let" variables and constants have block scope which is surrounded by curly-braces "{}" and cannot be used before declaration.</p>
<pre class=" language-jsx code-space" tabindex="0"><code class=" language-jsx">let i = 10;
console.log(i);   //Output 10

const PI = 3.14;
console.log(PI);  //Output 3.14
</code></pre>
<h3 id="2-arrow-functions"><strong>2. Arrow Functions</strong></h3>
<p>ES6 provides a feature known as Arrow Functions. It provides a more concise syntax for writing function expressions by removing the "function" and "return" keywords.<br /><br />Arrow functions are defined using the fat arrow (<code>=&gt;</code>) notation.</p>
<pre class=" language-jsx code-space" tabindex="0"><code class=" language-jsx">// Arrow function
let sumOfTwoNumbers = (a, b) =&gt; a + b;
console.log(sum(10, 20)); // Output 30
</code></pre>
<p>It is evident that there is no "return" or "function" keyword in the arrow function declaration.<br /><br />We can also skip the parenthesis in the case when there is exactly one parameter, but will always need to use it when you have zero or more than one parameter.<br /><br />But, if there are multiple expressions in the function body, then we need to wrap it with curly braces ("{}"). We also need to use the "return" statement to return the required value.</p>
<h3 id="3-multi-line-strings"><strong>3. Multi-line Strings</strong></h3>
<p>ES6 also provides Multi-line Strings. Users can create multi-line strings by using back-ticks().<br /><br />It can be done as shown below :</p>
<pre class=" language-jsx code-space" tabindex="0"><code class=" language-jsx">let greeting = &#180;Hello World,     
                Greetings to all,
                Keep Learning and Practicing!&#180;
                
</code></pre>
<h3 id="4-default-parameters"><strong>4. Default Parameters</strong></h3>
<p>In ES6, users can provide the default values right in the signature of the functions. But, in ES5, OR operator had to be used.</p>
<pre class=" language-jsx code-space" tabindex="0"><code class=" language-jsx">//ES6
let calculateArea = function(height = 100, width = 50) {  
    // logic
}

//ES5
var calculateArea = function(height, width) {  
   height =  height || 50;
   width = width || 80;
   // logic
}
</code></pre>
<h3 id="5-template-literals"><strong>5. Template Literals</strong></h3>
<p>ES6 introduces very simple string templates along with placeholders for the variables. The syntax for using the string template is &#36;{PARAMETER} and is used inside of the back-ticked string.</p>
<pre class=" language-jsx code-space" tabindex="0"><code class=" language-jsx">let name = &#180;My name is &#36;{firstName} &#36;{lastName}&#180;
</code></pre>
<h3 id="6-destructuring-assignment"><strong>6. Destructuring Assignment</strong></h3>
<p>Destructuring is one of the most popular features of ES6. The destructuring assignment is an expression that makes it easy to extract values from arrays, or properties from objects, into distinct variables.<br /><br />There are two types of destructuring assignment expressions, namely, Array Destructuring and Object Destructuring. It can be used in the following manner :</p>
<pre class="code-space language-jsx" tabindex="0"><code class=" language-jsx">//Array Destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits; // Array destructuring assignment
console.log(a, b);

//Object Destructuring
let person = {name: "Peter", age: 28};
let {name, age} = person; // Object destructuring assignment
console.log(name, age);
</code></pre>
<h3 id="7-enhanced-object-literals"><strong>7. Enhanced Object Literals</strong></h3>
<p>ES6 provides enhanced object literals which make it easy to quickly create objects with properties inside the curly braces.</p>
<pre class="code-space language-jsx" tabindex="0"><code class=" language-jsx">function getMobile(manufacturer, model, year) {
   return {
      manufacturer,
      model,
      year
   }
}
getMobile("Samsung", "Galaxy", "2020");
</code></pre>
<h3 id="8-promises"><strong>8. Promises</strong></h3>
<p>In ES6, Promises are used for asynchronous execution. We can use promise with the arrow function as demonstrated below.</p>
<pre class="code-space language-jsx" tabindex="0"><code class=" language-jsx">var asyncCall =  new Promise((resolve, reject) =&gt; {
   // do something
   resolve();
}).then(()=&gt; {   
   console.log('DON!');
})
</code></pre>
<h3 id="9-classes"><strong>9. Classes</strong></h3>
<p>Previously, classes never existed in JavaScript. Classes are introduced in ES6 which looks similar to classes in other object-oriented languages, such as C++, Java, PHP, etc. But, they do not work exactly the same way. ES6 classes make it simpler to create objects, implement inheritance by using the "extends" keyword and also reuse the code efficiently.<br /><br />In ES6, we can declare a class using the new "class" keyword followed by the name of the class.</p>
<pre class="code-space language-jsx" tabindex="0"><code class=" language-jsx">class UserProfile {   
   constructor(firstName, lastName) { 
      this.firstName = firstName;
      this.lastName = lastName;     
   }  
    
   getName() {       
     console.log(&#180;The Full-Name is &#36;{this.firstName} &#36;{this.lastName}&#180;);    
   } 
}
let obj = new UserProfile('John', 'Smith');
obj.getName(); // output: The Full-Name is John Smith
</code></pre>
<h3 id="10-modules"><strong>10. Modules</strong></h3>
<p>Previously, there was no native support for modules in JavaScript. ES6 introduced a new feature called modules, in which each module is represented by a separate ".js" file. We can use the "import" or "export" statement in a module to import or export variables, functions, classes or any other component from/to different files and modules.</p>
<pre class="code-space language-jsx" tabindex="0"><code class=" language-jsx">export var num = 50; 
export function getName(fullName) {   
   //data
};
</code></pre>
<pre class="code-space language-jsx" tabindex="0"><code class=" language-jsx">import {num, getName} from 'module';
console.log(num); // 50</code></pre>
</li>
</ul>
      `,
    },
    {
      question: "Các giá trị Falsy trong Javascript là gì?",
      answer: `
        <div>Là các giá trị khi chuyển đổi thành Boolean thì sẽ return về <strong>FALSE</strong></div>
        <div class="code-space">
          <p>''</p>
          <p>0</p>
          <p>null</p>
          <p>undefined</p>
          <p>NaN</p>
          <p>false</p>
          <p>-0</p>
          <p>0n // BigInt, when used as a boolean, follows the same rule as a Number</p>
        </div>
      `,
    },
    {
      question: "What are the available methods in Javascript?",
      answer: `
      <ul>
        <li>anchor () &ndash; Tạo một anchor HTML để được sử dụng l&agrave;m mục ti&ecirc;u si&ecirc;u văn bản</li>
        <li>ceil () &ndash; trả về số nguy&ecirc;n nhỏ nhất lớn hơn hoặc bằng số đ&atilde; cho</li>
        <li>concat () &ndash; Kết hợp hai chuỗi v&agrave; trả về chuỗi mới hơn</li>
        <li>constructor () &ndash; Trả về h&agrave;m đ&atilde; tạo phi&ecirc;n bản tương ứng của đối tượng</li>
        <li>Date () &ndash; Trả về ng&agrave;y v&agrave; giờ hiện tại</li>
        <li>Date.parse () &ndash; Ph&acirc;n t&iacute;ch c&uacute; ph&aacute;p biểu diễn chuỗi của ng&agrave;y v&agrave; giờ, sau đ&oacute; trả về biểu diễn mili gi&acirc;y b&ecirc;n trong cho c&ugrave;ng một</li>
        <li>execute () &ndash; T&igrave;m kiếm kết quả ph&ugrave; hợp trong tham số chuỗi</li>
        <li>filter () &ndash; Tạo một mảng mới với tất cả c&aacute;c phần tử của mảng m&agrave; h&agrave;m lọc trả về true</li>
        <li>font color () &ndash; Hiển thị một chuỗi theo m&agrave;u được chỉ định</li>
        <li>link () &ndash; Tạo một li&ecirc;n kết si&ecirc;u văn bản HTML y&ecirc;u cầu một URL kh&aacute;c</li>
        <li>localeCompare () &ndash; Trả về một số cho biết một chuỗi tham chiếu đến trước, sau hay giống với chuỗi đ&atilde; cho theo thứ tự sắp xếp</li>
        <li>match () &ndash; Được sử dụng để so khớp một biểu thức ch&iacute;nh quy với một chuỗi</li>
        <li>pop () &ndash; Loại bỏ v&agrave; trả về phần tử cuối c&ugrave;ng từ một mảng</li>
        <li>reduce() &ndash; &Aacute;p dụng đồng thời một h&agrave;m cho hai gi&aacute; trị của mảng để giảm ch&uacute;ng xuống một gi&aacute; trị duy nhất</li>
        <li>round () &ndash; L&agrave;m tr&ograve;n gi&aacute; trị của số đ&atilde; cho th&agrave;nh số nguy&ecirc;n gần nhất v&agrave; trả về gi&aacute; trị tương tự</li>
        <li>Slice () &ndash; Tr&iacute;ch xuất một phần nhất định của một chuỗi v&agrave; trả về chuỗi c&ograve;n lại</li>
        <li>some () &ndash; trả về true nếu &iacute;t nhất một phần tử của mảng thỏa m&atilde;n h&agrave;m kiểm tra được cung cấp</li>
        <li>toLocaleString () &ndash; Trả về gi&aacute; trị chuỗi của số hiện tại ở định dạng phụ thuộc v&agrave;o c&agrave;i đặt ng&ocirc;n ngữ của tr&igrave;nh duyệt</li>
        <li>sup () &ndash; Hiển thị một chuỗi dưới dạng chỉ số tr&ecirc;n</li>
        <li>toSource () &ndash; Trả về một chuỗi chứa nguồn của đối tượng Boolean</li>
        <li>toUpperCase () &ndash; Chuyển văn bản th&agrave;nh chữ hoa</li>
        <li>valueOf () &ndash; Trả về gi&aacute; trị ban đầu của đối tượng được chỉ định</li>
      </ul>
      `,
    },
    {
      question: "What is the question?",
      answer: "Updating...",
    },
  ],
};
