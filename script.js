<script type="text/javascript">
  // Initialize Google Translate
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en', // Change to your site's main default language (e.g., 'km' if default is Khmer)
      includedLanguages: 'km,en,vi,ja,ko,th', // Restrict to these 6 languages
      autoDisplay: false
    }, 'google_translate_element');
  }

  // Function called when dropdown option is selected
  function changeLanguage(langCode) {
    if (!langCode) return;

    var translateCombo = document.querySelector('.goog-te-combo');
    if (translateCombo) {
      translateCombo.value = langCode;
      translateCombo.dispatchEvent(new Event('change'));
    }
  }
</script>

<!-- Load Google Translate API Script -->
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
