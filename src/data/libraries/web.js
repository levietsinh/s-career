export const data = {
  name: "Website General",
  references: [],
  library: [
    {
      question: "HTTP Status Code?",
      answer: `<ul>
          <li>
          1xx: Information (Thông tin): Khi nhận được những mã như vậy tức là request đã được server tiếp nhận và quá trình xử lý request đang được tiếp tục.
          </li>
          <li>
          2xx: Success (Thành công): Khi nhận được những mã như vậy tức là request đã được server tiếp nhận, hiểu và xử lý thành công
          </li>
          <li>
          3xx: Redirection (Chuyển hướng): Mã trạng thái này cho biết client cần có thêm action để hoàn thành request
          </li>
          <li>
          4xx: Client Error (Lỗi Client): Nó nghĩa là request chứa cú pháp không chính xác hoặc không được thực hiện.
          </li>
          <li>
          5xx: Server Error (Lỗi Server): Nó nghĩa là Server thất bại với việc thực hiện một request nhìn như có vẻ khả thi.
          </li>
        </ul>
        <br/>
        <p style="font-weight: 700; font-size: 18px;">I. 1xx Infomation (Thông tin)</p>
        <ul style="padding: 12px; list-style: inside;">
          <li>100 Continue:  Chỉ một phần của Request được nhận bởi Server (có thể là header và Client cần gửi tiếp body), nhưng miễn là nó không bị loại bỏ, Client nên tiếp tục với Request.</li>
          <li>101 Switching Protocols: Requester đã hỏi Server về việc thanh đổi Protocol và Server đã chấp nhận điều đó</li>
        </ul>
        <p style="font-weight: 700; font-size: 18px;">II. 2xx Success (Thành công)</p>
        <ul style="padding: 12px; list-style: inside;">
          <li>200 OK: Request đã được tiếp nhận và xử lý thành công. Các Response thực tế trả về sẽ phụ thuộc vào phương thức HTTP của Request. Trong một GET Request, Response sẽ chứa một thực thể tương ứng với các tài nguyên yêu cầu, trong một POST Request, Response sẽ chứa một thực thể mô tả hoặc chứa các kết quả của các action.</li>
          <li>201 Created: Request đã được xử lý, kết quả của việc xử lý tạo ra một resource mới.</li>
          <li>202 Accepted: Request được chấp nhận cho xử lý, nhưng việc xử lý chưa hoàn thành.</li>
          <li>203 Non-authoritative Information (Xuất hiện từ HTTP/1.1): Server là nơi chuyển đổi proxy (ví dụ một Web accelerator) đã nhận được 200 OK nhưng nó trả về một phiên bản thay đổi (có thể là header) của Response nguyên gốc.</li>
          <li>204 No Content: Server đã xử lý thành công request nhưng không trả về bất cứ content nào.</li>
          <li>205 Reset Content: Server đã xử lý thành công request nhưng không trả về bất cứ content nào. Không giống với 204 No Content Response này yêu cầu phía Client phải thiết lập lại document view.</li>
          <li>206 Partial Content: Server chỉ trả về một phần của resouce(dạng byte) do một range header được gửi bởi phía Client. Các Range Header được sửa dụng bởi Client để cho phép nối lại các phần của file download bị dán đoạn hoặc chia thành nhiều luồng download.</li>
        </ul>
        <p style="font-weight: 700; font-size: 18px;">III. 3xx Redirection (Sự chuyển hướng lại)</p>
        <ul style="padding: 12px; list-style: inside;">
          <li>300 Multiple Choices: Một danh sách các link. Người sử dụng có thể chọn một link và tới vị trí đó. Tối đa 5 địa chỉ. Ví dụ: List các file video với format khác nhau</li>
          <li>301 Moved Permanently: Request hiện tại và các request sau được yêu cầu di chuyển tới một URI mới.</li>
          <li>302 Found: Đây là một ví dụ cho thấy sự mâu thuẫn giữa thực tiễn và quy chuẩn. Ở phiên bản HTTP/1.0 nó có nghĩa là yêu cầu Client chuyển hướng đến một URL tạm thời (tương tự như là 301 Moved Permanently) nhưng phần lớn các browser lại thực hiện nó với ý nghĩa của 303 See Other(sẽ nói sau đây). Do đó từ phiên bản HTTP/1.1 có thêm hai mã 303 và 307 để phân biệt rõ hành vi, nhưng một số ứng dụng web và framework vẫn sử dụng 302 như thể là 303.</li>
          <li>303 See Other (Xuất hiện từ HTTP/1.1): Response trả về của Request có thể tìm thấy ở một URL khác bằng cách sử dụng phương thức GET.</li>
          <li>304 Not Modified: Đây là Status-Code tới một If-Modified-Since hoặc If-None-Match header, nơi mà URL không được chỉnh sửa từ ngày cụ thể.</li>
          <li>305 Use Proxy: Tài nguyên yêu cầu chỉ có sẵn thông qua một proxy, địa chỉ mà được cung cấp trong các Response. Nhiều HTTP Client (như  Mozilla và Internet Explorer) không xử lý một cách chính xác phản ứng với mã trạng thái này, chủ yếu là vì các lý do an ninh.</li>
          <li>306 Switch Proxy: Mã này hiện không còn được sử dụng, ý nghĩa ban đầu của nó là "Các Request tiếp theo nên sử dụng các proxy được chỉ định".</li>
          <li>307 Temporary Redirect (xuất hiện từ HTTP/1.1): Trong trường hợp này, Request hiện tại cần được lặp lại một URI khác nhưng các Request trong tương lai vẫn sử dụng URI gốc.</li>
        </ul>
        <p style="font-weight: 700; font-size: 18px;">IV. 4xx: Client Error (Lỗi Client)</p>
        <ul style="padding: 12px; list-style: inside;">
          <li>400 Bad Request: Server không thể xử lý hoặc sẽ không xử lý các Request lỗi của phía client (ví dụ Request có cú pháp sai hoặc Request lừa đảo định tuyến ...)</li>
          <li>401 Unauthorized: Tương tự như 403 Forbidden nhưng được sử dụng khi yêu cầu xác thực là bắt buộc và đã không thành công. Các Response bắt buộc phải có thành phần WWW-Authenticate chứa các thách thức với tài nguyên được yêu cầu.  Một số trang web vấn đề HTTP 401 khi một địa chỉ IP bị cấm từ các trang web (thường là các tên miền trang web) và địa chỉ cụ thể là từ chối quyền truy cập một trang web.</li>
          <li>402 Payment Required: Hiện tại mã này chưa được sử dụng và nó được dự trữ cho tương lai. Mục đích ban đầu là mã này có thể được sử dụng như là một phần của đề án tiền mặt hoặc micropayment kỹ thuật số, nhưng điều đó đã không xảy ra, và mã này thường không được sử dụng. Google API sử dụng Status-Code này nếu một nhà phát triển đặc biệt đã vượt quá giới hạn số lần yêu cầu.</li>
          <li>403 Forbidden: Request là hợp lệ nhưng server từ chối đáp ứng nó. Nó có nghĩa là trái phép, người dùng không có quyền cần thiết để tiếp cận với các tài nguyên.</li>
          <li>404 Not Found: Các tài nguyên hiện tại không được tìm thấy nhưng có thể có trong tương lai. Các request tiếp theo của Client được chấp nhận.</li>
          <li>405 Method Not Allowed: Request method không được hỗ trợ cho các tài nguyên được yêu cầu. Ví dụ Một GET request đến một POST resource, PUT Request gọi đến một tài nguyên chỉ đọc.</li>
          <li>406 Not Acceptable: Server chỉ có thể tạo một Response mà không được chấp nhận bởi Client.</li>
          <li>407 Proxy Authentication Required: Bạn phải xác nhận với một Server ủy quền trước khi Request này được phục vụ.</li>
          <li>408 Request Timeout: Request tốn thời gian dài hơn thời gian Server được chuẩn bị để đợi.</li>
          <li>409 Conflict: Request không thể được hoàn thành bởi vì sự xung đột, ví dụ như là xung đột giữa nhiều chỉnh sửa đồng thời.</li>
          <li>410 Gone: Các resource được yêu cầu không còn nữa và sẽ không có sẵn một lần nữa, khi gặp mã lỗi này Client không nên có gắng tìm kiếm các tài nguyên này ở những lần sau.</li>
          <li>411 Length Required: Content-Length không được xác định rõ. Server sẽ không chấp nhận Request nào không có nó.</li>
          <li>412 Precondition Failed: Server sẽ không đáp ứng một trong những điều kiện tiên quyết của Client trong Request.</li>
          <li>413 Payload Too Large: Server sẽ không chấp nhận yêu cầu, bởi vì đối tượng yêu cầu là quá rộng. Trước đây nó gọi là "Request Entity Too Large".</li>
          <li>414 URI Too Long: URI được cung cấp là quá dài để Server xử lý, thường là kết quả của quá nhiều dữ liệu được mã hóa như là một truy vấn chuỗi của một GET Request, trong trường hợp đó nó phải được chuyển đổi sang một POST Request. Trước đây được gọi là "Request-URI Too Long"</li>
          <li>415 Unsupported Media Type: Server sẽ không chấp nhận Request, bởi vì kiểu phương tiện không được hỗ trợ. Ví dụ khi Client upload một ảnh có định dạng image/svg+xml, nhưng server yêu cầu một định dạng khác.</li>
          <li>416 Range Not Satisfiable: Client yêu cầu một phần của tập tin nhưng server không thể cung cấp nó. Trước đây được gọi là "Requested Range Not Satisfiable"</li>
          <li>417 Expectation Failed: Máy chủ không thể đáp ứng các yêu cầu của trường Expect trong header.</li>
        </ul>
        <p style="font-weight: 700; font-size: 18px;">V. 5xx: Server Error (Lỗi Server)</p>
        <ul style="padding: 12px; list-style: inside;">
          <li>500 Internal Server Error: Một thông báo chung chung, được đưa ra khi Server gặp phải một trường hợp bất ngờ, Message cụ thể là không phù hợp.</li>
          <li>501 Not Implemented: Server không công nhận các Request method hoặc không có khả năng xử lý nó.</li>
          <li>502 Bad Gateway: Server đã hoạt động như một gateway hoặc proxy và nhận được một Response không hợp lệ từ máy chủ nguồn.</li>
          <li>503 Service Unavailable: Server hiện tại không có sẵn (Quá tải hoặc được down để bảo trì). Nói chung đây chỉ là trạng thái tạm thời.</li>
          <li>504 Gateway Timeout: Server đã hoạt động như một gateway hoặc proxy và không nhận được một Response từ máy chủ nguồn.</li>
          <li>505 HTTP Version Not Supported: Server không hỗ trợ phiên bản “giao thức HTTP”.</li>
        </ul>
        `,
    },
    {
      question:
        "What are Static Generation, Server-side Rendering and Client-side Rendering?",
      answer: `
        <ul style="list-style: dot">
          <li>
            <strong style="font-weight: bold;">Static Generation</strong> is the pre-rendering method that generates the HTML at build time.
            The pre-rendered HTML is then reused on each request.
          </li>
          <li>
            <strong style="font-weight: bold;">Server-side Rendering</strong> is the pre-rendering method that generates the HTML on each request.
            <br/>
            <p>Used when the data needs to be up-to-date with every request</p>
          </li>
          <li>
            <strong style="font-weight: bold;">Client-side Rendering</strong>:
            <p>
            If you do not need to pre-render the data, you can also use the following strategy (called Client-side Rendering):
            </p>
            <p>- Statically generate (pre-render) parts of the page that do not require external data.</p>
            <p>- When the page loads, fetch external data from the client using JavaScript and populate the remaining parts.</p>
            This approach works well for user dashboard pages, for example. 
            Because a dashboard is a private, user-specific page, SEO is not relevant, and the page doesn’t need to be pre-rendered. 
            The data is frequently updated, which requires request-time data fetching.
          </li>
        </ul>
      `,
    },
    {
      question: "When to Use Static Generation v.s. Server-side Rendering?",
      answer: `
        <p>We recommend using <a rel="noopener noreferrer" target="_blank" href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended"><strong>Static Generation</strong></a> (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.</p>
        <p>You can use<span>Static Generation</span> for many types of pages, including:</p>
        <ul style="list-style: disc; padding-left: 24px;">
        <li>Marketing pages</li>
        <li>Blog posts</li>
        <li>E-commerce product listings</li>
        <li>Help and documentation</li>
        </ul>
        <p>You should ask yourself: "Can I pre-render this page <strong>ahead</strong> of a user's request?" If the answer is yes, then you should choose Static<span>&nbsp;Generation</span>.</p>
        <p>On the other hand, <span>Static Generation</span> is <strong>not</strong> a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data and the page content changes with every request.</p>
        <p>In that case, you can use <a rel="noopener noreferrer" target="_blank" href="https://nextjs.org/docs/basic-features/pages#server-side-rendering"><strong>Server-side Rendering</strong></a>. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate frequently updated data.</p>
      `,
    },
    {
      question: "Local Storage, Section Storage and Cookie?",
      answer: `
        <h3 style="font-weight: bold; font-size: 18px;">Local Storage</h3>
        <ul style="list-style: disc; padding-left: 24px;">
          <li>Khả năng lưu trữ v&ocirc; thời hạn: C&oacute; nghĩa l&agrave; chỉ bị x&oacute;a bằng JavaScript, hoặc x&oacute;a bộ nhớ tr&igrave;nh duyệt, hoặc x&oacute;a bằng localStorage API.</li>
          <li>Lưu trữ được 5MB: Local Storage cho ph&eacute;p bạn lưu trữ th&ocirc;ng tin tương đối lớn l&ecirc;n đến 5MB, lưu được lượng th&ocirc;ng tin lớn nhất trong 3 loại.</li>
          <li>Kh&ocirc;ng gửi th&ocirc;ng tin l&ecirc;n server như Cookie n&ecirc;n bảo mật tốt hơn.</li>
        </ul>
        <br/>
        <h3 style="font-weight: bold; font-size: 18px;">Section Storage</h3>
        <ul style="list-style: disc; padding-left: 24px;">
          <li>Lưu tr&ecirc;n Client: Cũng giống như localStorage th&igrave; sessionStorage cũng d&ugrave;ng để lưu trữ dữ liệu tr&ecirc;n tr&igrave;nh duyệt của kh&aacute;ch truy cập (client).</li>
          <li>Mất dữ liệu khi đ&oacute;ng tab: Dữ liệu của sessionStorage sẽ mất khi bạn đ&oacute;ng tr&igrave;nh duyệt.</li>
          <li>Dữ liệu kh&ocirc;ng được gửi l&ecirc;n Server</li>
          <li>Th&ocirc;ng tin lưu trữ nhiều hơn cookie (&iacute;t nhất 5MB)</li>
        </ul>
        <br/>
        <h3 style="font-weight: bold; font-size: 18px;">Cookie</h3>
        <ul style="list-style: disc; padding-left: 24px;">
          <li>Th&ocirc;ng tin được gửi l&ecirc;n server: Cookie sẽ được truyền từ server tới browser v&agrave; được lưu trữ tr&ecirc;n m&aacute;y t&iacute;nh của bạn khi bạn truy cập v&agrave;o ứng dụng, mỗi khi người d&ugrave;ng tải ứng dụng, tr&igrave;nh duyệt sẽ gửi cookie để th&ocirc;ng b&aacute;o cho ứng dụng về hoạt động trước đ&oacute; của bạn. V&igrave; vậy đừng bao giờ lưu trữ những th&ocirc;ng tin quan trọng, y&ecirc;u cầu t&iacute;nh bảo mật cao v&agrave;o cookie v&igrave; n&oacute; ho&agrave;n to&agrave;n c&oacute; thể bị sửa đổi v&agrave; đ&aacute;nh cắp, thấp ch&iacute; c&oacute; thể lợi dụng điều n&agrave;y để tấn c&ocirc;ng website của bạn.</li>
          <li>Cookie chủ yếu l&agrave; để đọc ph&iacute;a m&aacute;y chủ (cũng c&oacute; thể được đọc ở ph&iacute;a m&aacute;y kh&aacute;ch), localStorage v&agrave; sessionStorage chỉ c&oacute; thể được đọc ở ph&iacute;a m&aacute;y kh&aacute;ch.</li>
          <li>C&oacute; thời gian sống: Mỗi cookie thường c&oacute; khoảng thời gian timeout nhất định do lập tr&igrave;nh vi&ecirc;n x&aacute;c định trước.</li>
          <li>Lưu trữ: cho ph&eacute;p lưu trữ tối đa 4KB v&agrave; v&agrave;i chục cookie cho một domain.</li>
        </ul>
      `,
    },
    {
      question: "What is BEM?",
      answer: `
        BEM - Block Element Modifier
      `,
    },
    {
      question: "What is CORS?",
      answer: `
      Cors ( Cross-Origin Resource Sharing) là một cơ chế trình duyệt cho phép truy cập và kiểm soát các tài nguyên nằm bên ngoài một miền nhất định nào đó. Nó sẽ mở rộng và thêm sự linh hoạt cho chính sách cùng nguồn gốc.
      `,
    },
    {
      question: "What is Cross-Site Scripting (XSS)?",
      answer: `
      Cross-Site Scripting (XSS) là một hình thức tấn công bằng mã độc phổ biến. Các hacker sẽ lợi dụng lỗ hổng trong bảo mật web để chèn các mã script, sau đó gửi cho người dùng để truy cập và mạo danh người dùng.      `,
    },
    {
      question: "What is the OAuth2?",
      answer: `<a href="https://viblo.asia/p/tim-hieu-doi-chut-ve-oauth2-eW65GvMLlDO" target="_blank">Tìm hiểu đôi chút về OAuth2</a>`
    },
    {
      question: "What is the JWT?",
      answer: "",
    },
    {
      question: "Why do we need Refresh Token?",
      answer: "",
    },
    {
      question: "Tại sao Access Token nhanh hết hạn?",
      answer: "",
    },
  ],
};
