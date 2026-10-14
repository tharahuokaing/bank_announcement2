let currentLang = 'en';

const translations = {
    en: {
        headerTitle: "Huokaing Thara Banking Portal",
        headerSubtitle: "Post-Penetration Testing Verified Release",
        announcementText: "🔒 System Security Verified: Penetration testing passed successfully. New customer utilities added below!"
    },
    km: {
        headerTitle: "ផតថលធនាគារ ហួកាំង តារា",
        headerSubtitle: "ការដាក់ឱ្យដំណើរការផ្ទៀងផ្ទាត់សុវត្ថិភាពក្រោយពេលសាកល្បងជ្រៀតចូល",
        announcementText: "🔒 បញ្ជាក់សុវត្ថិភាពប្រព័ន្ធ៖ ការធ្វើតេស្តជ្រៀតចូលបានជោគជ័យ។ បានបន្ថែមមុខងារថ្មីៗសម្រាប់អតិថិជនខាងក្រោម!"
    },
    vi: {
        headerTitle: "Cổng Ngân hàng Huokaing Thara",
        headerSubtitle: "Bản phát hành đã xác thực sau kiểm tra xâm nhập",
        announcementText: "🔒 Đã xác thực bảo mật hệ thống: Kiểm thử xâm nhập thành công. Các tiện ích khách hàng mới được thêm bên dưới!"
    },
    ja: {
        headerTitle: "ホウカイン・タラ バンキングポータル",
        headerSubtitle: "ペネトレーションテスト検証済みリリース",
        announcementText: "🔒 システムセキュリティ検証済：ペネトレーションテストが正常に完了しました。新しい顧客向け機能が追加されました！"
    },
    ko: {
        headerTitle: "후오카인 타라 뱅킹 포털",
        headerSubtitle: "모의 해킹 검증 완료 배포",
        announcementText: "🔒 시스템 보안 검증됨: 모의 해킹이 성공적으로 완료되었습니다. 새로운 고객 편의 기능이 아래에 추가되었습니다!"
    },
    th: {
        headerTitle: "พอร์ทัลธนาคาร ฮัวไคก์ ธารา",
        headerSubtitle: "รุ่นที่ได้รับการตรวจสอบความปลอดภัยหลังการทดสอบการเจาะระบบ",
        announcementText: "🔒 ยืนยันความปลอดภัยของระบบ: การทดสอบการเจาะระบบสำเร็จเรียบร้อยแล้ว เพิ่มยูทิลิตี้ลูกค้าใหม่ด้านล่าง!"
    }
};

function changeLanguage(langCode) {
    if (!langCode) return;
    currentLang = langCode;

    // Update main text elements from dictionary
    const headerTitle = document.getElementById('headerTitle');
    const headerSubtitle = document.getElementById('headerSubtitle');
    const announcementText = document.getElementById('announcementText');

    if (translations[currentLang]) {
        if (headerTitle) headerTitle.textContent = translations[currentLang].headerTitle;
        if (headerSubtitle) headerSubtitle.textContent = translations[currentLang].headerSubtitle;
        if (announcementText) announcementText.textContent = translations[currentLang].announcementText;
    }

    // Update all elements with data attributes matching current language
    document.querySelectorAll(`[data-${currentLang}]`).forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
}

// --- Dark Mode / Light Mode Toggle ---
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('themeToggleBtn');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    }
}

// --- Restore Saved Theme on Page Load ---
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const themeBtn = document.getElementById('themeToggleBtn');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeBtn) themeBtn.textContent = '☀️ Light Mode';
    }
});
