/* Option B: local VI/EN copy, including generated seat labels and gallery captions. */
(function () {
  'use strict';
  var copy = {
    'Đóng thông báo': 'Dismiss announcement',
    'Ưu đãi EarlyBird': 'Early Bird offer',
    'Ưu đãi': 'Special', 'Ưu đãi Early Bird giảm 15%': '15% off Early Bird',
    'Sự kiện từ OrcheStars': 'An OrcheStars event',
    'Ngày tổ chức': 'Event dates', 'Suất diễn': 'Showtimes',
    'Renaissance Riverside Sài Gòn': 'Renaissance Riverside Saigon',
    'The Nutcracker 2026 · Đêm nhung · OrcheStars': 'The Nutcracker 2026 · Velvet Night · OrcheStars',
    'Đến nội dung chính': 'Skip to content',
    'Trang chủ OrcheStars': 'OrcheStars homepage',
    'Điều hướng chính': 'Main navigation',
    'Điều hướng các mục': 'Section navigation',
    'Xem thêm': 'Read more', 'Thu gọn': 'Show less',
    'Vở diễn': 'The ballet', 'Hạng vé': 'Tickets', 'Chương trình': 'Programme',
    'Nghệ sĩ': 'Artists', 'Địa điểm': 'Venue', 'Hỏi đáp': 'FAQs',
    /* TTC cross-promo (ttc-option-1..3) */
    'Sự kiện Giáng sinh': 'Christmas event',
    'siêu hấp dẫn đang có ưu đãi Early Bird giảm 15%.': 'is now offering 15% off Early Bird tickets.',
    'Xem ngay!': 'Explore now!',
    'Có thể bạn cũng thích': 'You may also like', 'Có thể bạn': 'You may', 'cũng thích': 'also like', 'Cũng từ OrcheStars': 'Also from OrcheStars', 'Xem chương trình': 'View programme',
    'Banner sự kiện A Tale of Two Christmases 2026': 'Event banner for A Tale of Two Christmases 2026',
    'Suất': 'Shows', 'Nơi': 'Venue', '18:00 & 20:30 mỗi ngày': '18:00 & 20:30 daily',
    'Thêm một đêm nhạc': 'One more evening of music', 'mùa Giáng sinh': 'this Christmas',
    'Thứ Bảy · 19.12': 'Saturday · 19.12', 'Chủ Nhật · 20.12': 'Sunday · 20.12',
    '8 – 15 Tôn Đức Thắng, TP.HCM': '8 – 15 Ton Duc Thang, HCMC',
    'Dàn nhạc và hợp xướng OrcheStars trong đêm nhạc Giáng sinh, bốn suất diễn cuối tuần.': 'The OrcheStars orchestra and choir in a Christmas concert, four shows over one weekend.',
    'Mua vé': 'Buy tickets', 'Nhà Hát Hòa Bình': 'Hoa Binh Theatre',
    'Ballet mùa Giáng Sinh': 'Christmas Ballet', 'Kẹp Hạt Dẻ': 'The Nutcracker', 'Ngày': 'Date', 'Giờ': 'Time',
    'Nhà hát': 'Theatre', 'Hòa Bình': 'Hoa Binh', 'Đặt vé ngay': 'Book now',
    'Xem sơ đồ ghế': 'View seating plan', 'CUỘN XUỐNG': 'SCROLL DOWN',
    'Về vở diễn': 'About the ballet', 'Khi đồng hồ': 'When the clock',
    'điểm đến nửa đêm…': 'strikes midnight…',
    '“Một thế giới trong trẻo, rực rỡ và đầy mê hoặc, nơi': '“A vivid, enchanting world where',
    'những giấc mơ tuổi thơ': 'childhood dreams',
    'hiện hữu qua từng điệu múa.”': 'come alive in every dance.”',
    'Đêm Giáng sinh, cô bé Clara được tặng một chú lính kẹp hạt dẻ NUTCRACKER bằng gỗ. Khi đồng hồ điểm nửa đêm, phép màu bỗng đánh thức cả thế giới: cây thông vươn cao vút, những món đồ chơi sống dậy, cuộc chiến giữa thiện và ác bắt đầu, và cánh cửa dẫn vào vương quốc cổ tích mở ra.': 'On Christmas Eve, young Clara receives a wooden Nutcracker soldier. At midnight, magic awakens her world: the Christmas tree towers above her, toys come to life, a battle between good and evil begins, and the door to a fairy-tale kingdom opens.',
    'Đến với TP.HCM từ Saint Petersburg, thành phố nơi kiệt tác lần đầu ra mắt, Nhà hát Ballet Quốc gia Saint Petersburg mang theo đầy đủ dàn diễn viên, hệ thống trang phục nguyên bản và những bối cảnh sân khấu hoành tráng. Với hơn 5.000 buổi biểu diễn tại hơn 45 quốc gia, vở diễn đã đưa câu chuyện Giáng sinh kỳ diệu đến với khán giả khắp thế giới.': 'Travelling to Ho Chi Minh City from Saint Petersburg, where this masterpiece premiered, the Saint Petersburg National Ballet Theatre brings its full cast, original costumes and grand stage sets. With over 5,000 performances in more than 45 countries, the production has shared this magical Christmas story with audiences around the world.',
    'Đây là lựa chọn lý tưởng cho lần đầu đến với ballet, đủ sức làm say mê trẻ thơ và khơi dậy những rung động sâu lắng ở người lớn tuổi. Một buổi hẹn hò lãng mạn, một tối sum vầy bên gia đình, món quà của thời gian và những kỷ niệm đẹp.': 'An ideal introduction to ballet, this production enchants children and moves audiences of every age. A romantic date, an evening with family, a gift of time and lasting memories.',
    'Hai giờ đồng hồ để gác lại những lo toan, diện bộ trang phục yêu thích và tận hưởng vẻ đẹp của sân khấu. Một buổi tối để tìm lại niềm háo hức và mang về một ký ức đáng nâng niu.': 'Two hours to set your worries aside, dress for the occasion and enjoy the beauty of the stage. An evening to rediscover a sense of wonder and take home a memory to treasure.',
    'Thông tin vé': 'Ticket information', 'Ngày diễn': 'Performance date',
    'Thứ Ba': 'Tuesday', 'Mở màn': 'Curtain up', '~2 giờ': '~2 hours',
    '240 Ba Tháng Hai': '240 Ba Thang Hai', 'Giá vé': 'Ticket prices',
    'Từ 750.000đ': 'From 750.000đ', '6 hạng vé, đến 3.500.000đ': '6 tiers, up to 3.500.000đ',
    'Điểm nổi bật': 'Highlights', 'Nguyên bản': 'Original production',
    'Từ Saint Petersburg': 'From Saint Petersburg',
    'Đầy đủ dàn diễn viên, trang phục và bối cảnh của đoàn.': 'The company’s full cast, costumes and stage sets.',
    'Ngôi sao': 'Stars', 'Hai nghệ sĩ Mariinsky': 'Two Mariinsky stars',
    'Oksana Bondareva & Ivan Sitnikov thủ vai chính.': 'Starring Oksana Bondareva & Ivan Sitnikov.',
    'Âm nhạc': 'Music', 'Tchaikovsky bất hủ': 'Timeless Tchaikovsky',
    'Món quà mùa lễ hội cho cả gia đình.': 'A festive gift for the whole family.',
    'Chọn chỗ ngồi': 'Choose a seat', 'của bạn': 'for you',
    'Nhà Hát Hòa Bình · 2 tầng · 1.948 ghế. Chạm vào một hạng vé để xem vị trí trên sơ đồ.': 'Hoa Binh Theatre · 2 levels · 1,948 seats. Tap a ticket tier to see its location on the seating plan.',
    'Ghế mời': 'Invited seats', 'BẠN ĐANG XEM': 'YOU ARE VIEWING',
    'Chọn ghế': 'Choose seats', 'Toàn bộ hạng vé': 'All ticket tiers',
    '750.000đ đến 3.500.000đ': '750.000đ to 3.500.000đ',
    'Tình trạng ghế thực tế hiển thị khi đặt vé trên OrcheStars.': 'Live seat availability is shown when booking on OrcheStars.',
    'Sơ đồ khán phòng Nhà hát Hoà Bình, hai tầng, chia theo hạng vé': 'Hoa Binh Theatre seating plan, two levels, grouped by ticket tier',
    'TẦNG 1': 'LEVEL 1', 'TẦNG 2': 'LEVEL 2', 'SÂN KHẤU': 'STAGE',
    'Tầng 1': 'Level 1', 'Tầng 2': 'Level 2',
    'Hai hồi': 'Two acts', 'diệu kỳ': 'of wonder', 'Kịch bản': 'Libretto',
    'Marius Petipa, theo E. T. A. Hoffmann': 'Marius Petipa, after E. T. A. Hoffmann',
    'Biên đạo': 'Choreography', 'PHÚT': 'MIN', 'Hồi I': 'Act I', 'Hồi II': 'Act II',
    'Cảnh 1': 'Scene 1', 'Cảnh 2': 'Scene 2', 'Cảnh 3': 'Scene 3',
    'Đêm Giáng sinh tại nhà Stahlbaum': 'Christmas Eve at the Stahlbaum home',
    'Ngôi biệt thự bừng sáng ánh nến. Drosselmeyer bí ẩn xuất hiện với những màn ảo thuật kỳ thú và món quà đặc biệt dành cho Clara: một chú lính kẹp hạt dẻ NUTCRACKER bằng gỗ.': 'The house glows with candlelight. The mysterious Drosselmeyer arrives with wonderful magic tricks and a special gift for Clara: a wooden Nutcracker soldier.',
    'Trận chiến lúc nửa đêm': 'The midnight battle',
    'Cây thông vươn cao chạm trần, đội quân chuột ùa ra từ bóng tối. Chú lính kẹp hạt dẻ NUTCRACKER sống dậy đối đầu Vua Chuột, và lòng dũng cảm của Clara thay đổi tất cả.': 'The Christmas tree grows to the ceiling as an army of mice emerges from the shadows. The Nutcracker soldier comes to life to confront the Mouse King, and Clara’s courage changes everything.',
    'Cung điện Konfeturenburg': 'The palace of Konfeturenburg',
    'Clara cùng Hoàng tử bước vào vương quốc kẹo ngọt. Tiên Kẹo Ngọt mở màn lễ hội: điệu Tây Ban Nha, Trà Trung Hoa, Valse của những đóa hoa…': 'Clara and the Prince enter the Kingdom of Sweets. The Sugar Plum Fairy opens the celebrations: Spanish Chocolate, Chinese Tea, the Waltz of the Flowers…',
    'Cả vương quốc hòa chung niềm vui, cho đến khi đêm nhiệm màu khép lại.': 'The whole kingdom joins the festivities as the magical night draws to a close.',
    'Những ngôi sao': 'The stars', 'của Mariinsky': 'of the Mariinsky',
    'Prima · Nghệ sĩ độc tấu': 'Prima · Soloist', 'Premier · Nghệ sĩ độc tấu': 'Premier · Soloist',
    'Nghệ sĩ độc tấu Nhà hát Mariinsky (2014 đến 2024)': 'Mariinsky Theatre soloist (2014 to 2024)',
    'Huy chương Vàng, Cuộc thi Ballet Quốc tế Moscow': 'Gold medal, Moscow International Ballet Competition',
    'Giải thưởng “Golden Sofit”': '“Golden Sofit” award',
    'Lưu diễn tại hơn 50 quốc gia': 'Performed in over 50 countries',
    'Cựu sinh viên Học viện Ballet Nga Vaganova': 'Graduate of the Vaganova Academy of Russian Ballet',
    'Nghệ sĩ độc tấu, Nhà hát Mariinsky': 'Soloist, Mariinsky Theatre',
    'Nghệ sĩ độc tấu, Ballet Quốc gia Saint Petersburg (từ 2012)': 'Soloist, Saint Petersburg National Ballet (since 2012)',
    'Lưu diễn tại hơn 30 quốc gia': 'Performed in over 30 countries',
    'Nhà hát Ballet Quốc gia': 'National Ballet Theatre of',
    'Thành lập năm 1990 bởi một gia tộc ballet Mariinsky có truyền thống hơn một thế kỷ, nhà hát gìn giữ nguyên vẹn nghệ thuật biên đạo gốc của sân khấu Hoàng gia Nga, với mọi vũ công đều tốt nghiệp Học viện Vaganova (thành lập năm 1738). Sân khấu chính: Nhà hát Hoàng gia Hermitage.': 'Founded in 1990 by a Mariinsky ballet family with over a century of tradition, the theatre preserves the original choreography of the Russian Imperial stage. All its dancers are graduates of the Vaganova Academy, founded in 1738. Its home stage is the Imperial Hermitage Theatre.',
    'Được tán thưởng tại Nhật Bản · Trung Quốc · Hàn Quốc · Mỹ · Anh · Pháp · Đức · Tây Ban Nha · Ý · Dubai…': 'Acclaimed in Japan · China · South Korea · USA · UK · France · Germany · Spain · Italy · Dubai…',
    'buổi biểu diễn': 'performances', 'chuyến lưu diễn': 'tours', 'quốc gia': 'countries',
    'liên hoan quốc tế': 'international festivals', 'Khoảnh khắc': 'Gallery',
    'Ánh đèn, nhung đỏ': 'Lights, red velvet', '& những bước xoay': '& pirouettes',
    'Những khoảnh khắc từ sân khấu và bộ ảnh Nutcracker.': 'Moments from the stage and Nutcracker photo sessions.',
    'Điểm hẹn': 'The venue', 'Nhà Hát': 'Theatre',
    '240 đường Ba Tháng Hai, phường Hòa Hưng, TP. Hồ Chí Minh': '240 Ba Thang Hai Street, Hoa Hung Ward, Ho Chi Minh City',
    'Thứ Ba, 22.12.2026': 'Tuesday, 22.12.2026', 'Thời lượng': 'Duration',
    'Khuyến nghị': 'Please arrive', 'Có mặt trước 30 phút': '30 minutes early',
    'Mua vé ngay': 'Book tickets', 'Chỉ đường': 'Directions',
    'Trước buổi hẹn': 'Before your visit', 'Câu hỏi': 'Your questions,', 'thường gặp': 'answered',
    'Mọi điều cần biết để có một đêm ballet trọn vẹn.': 'Everything you need to enjoy your evening at the ballet.',
    'Hotline hỗ trợ': 'Support hotline',
    'Vở diễn có phù hợp với trẻ em không?': 'Is the performance suitable for children?',
    'Event THE NUTCRACKER là lựa chọn lý tưởng cho lần đầu đến với ballet, phù hợp với cả gia đình. Mỗi khán giả, kể cả trẻ em, cần có vé riêng; độ tuổi tối thiểu theo quy định của Ban tổ chức.': 'Event THE NUTCRACKER is an ideal introduction to ballet for the whole family. Every audience member, including children, needs a separate ticket; the minimum age is subject to the organiser’s policy.',
    'Tôi mua vé và chọn vị trí như thế nào?': 'How do I buy tickets and choose my seats?',
    'Xem hạng vé và sơ đồ khán phòng ở mục Hạng vé, sau đó nhấn “Mua vé” để chọn vị trí và hoàn tất đặt vé trên hệ thống OrcheStars.': 'Browse the ticket tiers and seating plan in the Tickets section, then select “Buy tickets” to choose your seats and complete your booking on OrcheStars.',
    'Tôi cần đến lúc mấy giờ?': 'What time should I arrive?',
    'Vở diễn bắt đầu lúc 20:00. Bạn nên có mặt trước ít nhất 30 phút; khán giả đến muộn có thể phải chờ đến giờ giải lao để vào khán phòng.': 'The performance begins at 20:00. Please arrive at least 30 minutes early. Late arrivals may need to wait until the interval to enter the auditorium.',
    'Tôi cần mang gì để check-in?': 'What do I need for check-in?',
    'Vui lòng xuất trình email kèm vé điện tử chính thức do OrcheStars gửi. Ban tổ chức không chấp nhận ảnh chụp màn hình hoặc ảnh chụp vé.': 'Please present the email containing your official e-ticket from OrcheStars. Screenshots or photographs of tickets are not accepted.',
    'Vé có được đổi hoặc hoàn tiền không?': 'Can tickets be exchanged or refunded?',
    'Vé đã mua không được đổi, trả hoặc hoàn tiền theo điều khoản của chương trình. Vui lòng kiểm tra kỹ thông tin trước khi thanh toán.': 'Purchased tickets cannot be exchanged, returned or refunded under the event’s terms. Please check your details carefully before paying.',
    'Tôi có thể chụp ảnh hoặc quay phim không?': 'May I take photos or record video?',
    'Không quay phim, livestream hoặc chụp ảnh có đèn flash trong buổi diễn để giữ an toàn cho nghệ sĩ và không gian thưởng thức chung.': 'Filming, livestreaming and flash photography are not permitted during the performance, for the safety of the artists and everyone’s enjoyment.',
    'Màn nhung sẽ mở sau': 'The curtain rises in', 'Đếm ngược đến giờ diễn': 'Countdown to the performance',
    'NGÀY': 'DAYS', 'GIỜ': 'HOURS', 'GIÂY': 'SEC',
    'Giữ một chỗ ngồi': 'Save a seat', 'cho người bạn thương': 'for someone you love',
    'Mua vé từ 750.000đ': 'Tickets from 750.000đ', 'Đơn vị đồng hành': 'Our partners',
    'UBND TP. Hồ Chí Minh': 'Ho Chi Minh City People’s Committee',
    'Hội Nhạc cổ điển Việt Nam': 'Vietnam Classical Music Association',
    'Liên hệ & kết nối': 'Get in touch',
    '675-677 Đường Điện Biên Phủ, Phường 25, Quận Bình Thạnh, TP.HCM': '675–677 Dien Bien Phu Street, Ward 25, Binh Thanh District, Ho Chi Minh City',
    'Công ty Cổ phần Orchestars': 'Orchestars Joint Stock Company',
    'Địa chỉ: 675-677 Đường Điện Biên Phủ, Phường 25, Quận Bình Thạnh, TP.HCM': 'Address: 675–677 Dien Bien Phu Street, Ward 25, Binh Thanh District, Ho Chi Minh City',
    'Giấy chứng nhận đăng ký doanh nghiệp số: 0318788336 cấp lần đầu ngày 23 tháng 12 năm 2024 bởi Sở Kế Hoạch và Đầu Tư TP. Hồ Chí Minh.': 'Business registration certificate No. 0318788336, first issued on 23 December 2024 by the Ho Chi Minh City Department of Planning and Investment.',
    'Về chúng tôi': 'About us', 'Điều khoản và Chính sách': 'Terms and policies',
    'Chính sách thanh toán': 'Payment policy', 'Chính sách bảo mật thông tin': 'Privacy policy',
    'Chính sách xử lý khiếu nại': 'Complaints policy',
    '© 2026 Công ty Cổ phần Orchestars. All rights reserved.': '© 2026 Orchestars Joint Stock Company. All rights reserved.',
    'Key visual The Nutcracker 2026: chú lính kẹp hạt dẻ NUTCRACKER và nàng vũ công trong khung sân khấu giấy': 'The Nutcracker 2026 key visual: the Nutcracker soldier and a ballerina on a paper theatre stage',
    'Dàn diễn viên của đoàn trong cảnh cung điện bánh kẹo của Nutcracker': 'The company in the Nutcracker Kingdom of Sweets scene',
    'Chân dung Oksana Bondareva': 'Portrait of Oksana Bondareva',
    'Chân dung Ivan Sitnikov': 'Portrait of Ivan Sitnikov',
    'Dàn vũ công Nutcracker trong khung cảnh cung điện rực rỡ': 'Nutcracker dancers in a magnificent palace setting',
    'Oksana Bondareva · chân dung từ Afisha, đã tăng nét bằng AI': 'Oksana Bondareva · portrait from Afisha, enhanced with AI',
    'Ivan Sitnikov · chân dung trên website đoàn': 'Ivan Sitnikov · portrait from the company’s website',
    'Cô bé và chú lính kẹp hạt dẻ NUTCRACKER · ảnh photoshoot của đoàn': 'Clara and the Nutcracker soldier · company photo session',
    'Cặp vũ công Nutcracker bên cây thông': 'Nutcracker dancers beside the Christmas tree',
    'Cảnh nâng vũ công tại cung điện bánh kẹo · ảnh sân khấu của đoàn': 'A lift in the Kingdom of Sweets · company stage photo',
    'Vũ công trong trang phục hồng · ảnh photoshoot Nutcracker của đoàn': 'Dancer in pink · company Nutcracker photo session',
    'Dàn vũ công tại cung điện bánh kẹo · ảnh sân khấu của đoàn': 'Dancers in the Kingdom of Sweets · company stage photo',
    'Cảnh đối đầu trên sân khấu Nutcracker': 'The battle scene on the Nutcracker stage',
    'Nhân vật Harlequin trong buổi tiệc Giáng sinh · ảnh sân khấu của đoàn': 'Harlequin at the Christmas party · company stage photo',
    'Event THE NUTCRACKER và Vua Chuột · ảnh photoshoot của đoàn': 'Event THE NUTCRACKER and the Mouse King · company photo session',
    'Các nhân vật trong buổi tiệc Giáng sinh · ảnh sân khấu của đoàn': 'Characters at the Christmas party · company stage photo',
    'Dàn vũ công trong trang phục Nutcracker · ảnh photoshoot của đoàn': 'Dancers in Nutcracker costumes · company photo session',
    'Mặt tiền Nhà Hát Hòa Bình với biển tên màu xanh, mái hiên đỏ và lối cầu thang vào sảnh': 'Hoa Binh Theatre facade with blue signage, a red canopy and steps to the entrance',
    'Tạm dừng tự chuyển': 'Pause autoplay', 'Bật tự chuyển': 'Start autoplay',
    'Điểm nổi bật: trang 1 / 3': 'Highlights: slide 1 of 3',
    'Điểm nổi bật: trang 2 / 3': 'Highlights: slide 2 of 3',
    'Điểm nổi bật: trang 3 / 3': 'Highlights: slide 3 of 3',
    'Nghệ sĩ: trang 1 / 2': 'Artists: slide 1 of 2',
    'Nghệ sĩ: trang 2 / 2': 'Artists: slide 2 of 2',
    'Đóng': 'Close', 'Ảnh trước': 'Previous image', 'Ảnh sau': 'Next image',
    'Điểm nổi bật: mục trước': 'Highlights: previous slide',
    'Điểm nổi bật: mục tiếp theo': 'Highlights: next slide',
    'Nghệ sĩ: mục trước': 'Artists: previous slide',
    'Nghệ sĩ: mục tiếp theo': 'Artists: next slide',
    'The Nutcracker · Event THE NUTCRACKER. Nhà hát Ballet Quốc gia Saint Petersburg, 20:00 ngày 22.12.2026 tại Nhà Hát Hòa Bình, TP.HCM. Vé từ 750.000đ.': 'The Nutcracker · Event THE NUTCRACKER. Saint Petersburg National Ballet Theatre, 20:00 on 22.12.2026 at Hoa Binh Theatre, Ho Chi Minh City. Tickets from 750.000đ.'
  };
  var reverse = {};
  Object.keys(copy).forEach(function (key) { reverse[copy[key]] = key; });
  var originals = new WeakMap();
  var attrs = new WeakMap();
  var lang = 'vi';
  var button = document.querySelector('[data-language-toggle]');
  var attributes = ['alt', 'aria-label', 'data-caption', 'content'];
  function english(value) {
    var key = value.trim();
    return copy[key] ? value.replace(key, copy[key]) : value;
  }
  function translated(value) {
    return lang === 'en' ? english(value) : value;
  }
  function canonical(value) {
    var key = value.trim();
    return reverse[key] ? value.replace(key, reverse[key]) : value;
  }
  function text(node) {
    if (!node.parentElement || node.parentElement.closest('script,style,[data-language-toggle]')) return;
    var value = node.nodeValue;
    var original = originals.get(node);
    if (original === undefined || (value !== original && value !== english(original))) {
      original = canonical(value);
      originals.set(node, original);
    }
    var next = translated(original);
    if (value !== next) node.nodeValue = next;
  }
  function element(el) {
    if (el.hasAttribute('data-language-toggle')) return;
    var record = attrs.get(el) || {};
    attributes.forEach(function (name) {
      if (!el.hasAttribute(name)) return;
      var value = el.getAttribute(name);
      var original = record[name];
      if (original === undefined || (value !== original && value !== english(original))) original = canonical(value);
      record[name] = original;
      var next = translated(original);
      if (value !== next) el.setAttribute(name, next);
    });
    attrs.set(el, record);
  }
  function translate(root) {
    if (root.nodeType === Node.TEXT_NODE) { text(root); return; }
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    if (root.matches('script,style,[data-language-toggle]')) return;
    element(root);
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      if (walker.currentNode.nodeType === Node.TEXT_NODE) text(walker.currentNode);
      else element(walker.currentNode);
    }
  }
  function setLanguage(next) {
    lang = next;
    document.documentElement.lang = lang;
    translate(document.head);
    translate(document.body);
    button.textContent = lang === 'vi' ? 'EN' : 'VI';
    button.lang = lang === 'vi' ? 'en' : 'vi';
    button.setAttribute('aria-label', lang === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt');
    try { localStorage.setItem('nutcracker-option-b-language', lang); } catch (_) {}
  }
  var observer = new MutationObserver(function (changes) {
    changes.forEach(function (change) {
      if (change.type === 'childList') change.addedNodes.forEach(translate);
      else if (change.type === 'characterData') text(change.target);
      else element(change.target);
    });
  });
  observer.observe(document.body, {subtree:true, childList:true, characterData:true, attributes:true, attributeFilter:attributes});
  button.addEventListener('click', function () { setLanguage(lang === 'vi' ? 'en' : 'vi'); });
  var saved;
  try { saved = localStorage.getItem('nutcracker-option-b-language'); } catch (_) {}
  setLanguage(saved === 'en' ? 'en' : 'vi');
})();
