export const data = {
  name: "CSS - Cascading Style Sheets",
  references: [],
  library: [
    {
      id: 1,
      question: "CSS Priority Rackings?",
      answer: `
        <ol style="list-style: decimal; padding: 8px 20px;">
          <li>Important (<span>!important</span>)</li>
          <li>Inline CSS (attribute style in HTML tags)</li>
          <li>Media query (responsive)</li>
          <li>Selector Specificity ( id &gt; class &gt; default of tag)</li>
          <li>Rule Order (be arranged in CSS file)</li>
          <li>Browser Default</li>
        </ol>
      `,
    },
    {
      id: 2,
      question: "CSS Selectors",
      answer: `
        <table class="ws-table-all notranslate">
        <tbody>
        <tr style="border: 1px solid #eee;">
        <th style="padding: 4px;">Selector</th>
        <th style="padding: 4px;">Example</th>
        <th style="padding: 4px;">Example description</th>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><a href="https://www.w3schools.com/cssref/sel_class.php">.<i>class</i></a></td>
        <td class="notranslate">.intro</td>
        <td style="padding: 4px;">Selects all elements with class="intro"</td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><em>.class1.class2</em></td>
        <td class="notranslate">.name1.name2</td>
        <td style="padding: 4px;">Selects all elements with both<span>&nbsp;</span><em>name1</em><span>&nbsp;</span>and<span>&nbsp;</span><em>name2</em><span>&nbsp;</span>set within its class attribute</td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><em>.class1 .class2</em></td>
        <td class="notranslate">.name1 .name2</td>
        <td style="padding: 4px;">Selects all elements with<span>&nbsp;</span><em>name2</em><span>&nbsp;</span>that is a descendant of an element with<span>&nbsp;</span><em>name1</em></td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><a href="https://www.w3schools.com/cssref/sel_id.php">#<i>id</i></a></td>
        <td class="notranslate">#firstname</td>
        <td style="padding: 4px;">Selects the element with id="firstname"</td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><a href="https://www.w3schools.com/cssref/sel_all.php">*</a></td>
        <td class="notranslate">*</td>
        <td style="padding: 4px;">Selects all elements</td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><i><a href="https://www.w3schools.com/cssref/sel_element.php">element</a></i></td>
        <td class="notranslate">p</td>
        <td style="padding: 4px;">Selects all &lt;p&gt; elements</td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><i><a href="https://www.w3schools.com/cssref/sel_element_class.php">element.class</a></i></td>
        <td class="notranslate">p.intro</td>
        <td style="padding: 4px;">Selects all &lt;p&gt; elements with class="intro"</td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><i><a href="https://www.w3schools.com/cssref/sel_element_comma.php">element,element</a></i></td>
        <td class="notranslate">div, p</td>
        <td style="padding: 4px;">Selects all &lt;div&gt; elements and all &lt;p&gt; elements</td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><a href="https://www.w3schools.com/cssref/sel_element_element.php"><i>element</i><span>&nbsp;</span><i>element</i></a></td>
        <td class="notranslate">div p</td>
        <td style="padding: 4px;">Selects all &lt;p&gt; elements inside &lt;div&gt; elements</td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><a href="https://www.w3schools.com/cssref/sel_element_gt.php"><i>element</i>&gt;<i>element</i></a></td>
        <td class="notranslate">div &gt; p</td>
        <td style="padding: 4px;">Selects all &lt;p&gt; elements where the parent is a &lt;div&gt; element</td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><a href="https://www.w3schools.com/cssref/sel_element_pluss.php"><i>element</i>+<i>element</i></a></td>
        <td class="notranslate">div + p</td>
        <td style="padding: 4px;">Selects the first &lt;p&gt; element that is placed immediately after &lt;div&gt; elements</td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><a href="https://www.w3schools.com/cssref/sel_gen_sibling.php"><i>element1</i>~<i>element2</i></a></td>
        <td style="padding: 4px;">p ~ ul</td>
        <td style="padding: 4px;">Selects every &lt;ul&gt; element that is preceded by a &lt;p&gt; element</td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><a href="https://www.w3schools.com/cssref/sel_attribute.php">[<i>attribute</i>]</a></td>
        <td class="notranslate">[target]</td>
        <td style="padding: 4px;">Selects all elements with a target attribute</td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><a href="https://www.w3schools.com/cssref/sel_attribute_value.php">[<i>attribute</i>=<i>value</i>]</a></td>
        <td class="notranslate">[target=_blank]</td>
        <td style="padding: 4px;">Selects all elements with target="_blank"</td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><a href="https://www.w3schools.com/cssref/sel_attribute_value_contains.php">[<i>attribute</i>~=<i>value</i>]</a></td>
        <td class="notranslate">[title~=flower]</td>
        <td style="padding: 4px;">Selects all elements with a title attribute containing the word "flower"</td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><a href="https://www.w3schools.com/cssref/sel_attribute_value_lang.php">[<i>attribute</i>|=<i>value</i>]</a></td>
        <td class="notranslate">[lang|=en]</td>
        <td style="padding: 4px;">Selects all elements with a lang attribute value equal to "en" or starting with "en-"</td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><a href="https://www.w3schools.com/cssref/sel_attr_begin.php">[<i>attribute</i>^=<i>value</i>]</a></td>
        <td style="padding: 4px;">a[href^="https"]</td>
        <td style="padding: 4px;">Selects every &lt;a&gt; element whose href attribute value begins with "https"</td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><a href="https://www.w3schools.com/cssref/sel_attr_end.php">[<i>attribute</i>$=<i>value</i>]</a></td>
        <td style="padding: 4px;">a[href$=".pdf"]</td>
        <td style="padding: 4px;">Selects every &lt;a&gt; element whose href attribute value ends with ".pdf"</td>
        </tr>
        <tr style="border: 1px solid #eee;">
        <td style="padding: 4px;"><a href="https://www.w3schools.com/cssref/sel_attr_contain.php">[<i>attribute</i>*=<i>value</i>]</a></td>
        <td style="padding: 4px;">a[href*="w3schools"]</td>
        <td style="padding: 4px;">Selects every &lt;a&gt; element whose href attribute value contains the substring "w3schools"</td>
        </tr>
        </tbody>
        </table>
        `,
    },
    {
      id: 3,
      question: "What's your name?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio et deserunt dolores quisquam, tempore culpa dicta natus blanditiis labore recusandae vitae, repellat vero. Nulla veritatis eligendi non ab. Vel?",
    },
  ],
};
