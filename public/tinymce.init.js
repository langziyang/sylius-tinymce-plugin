// eslint-disable-next-line no-undef
tinymce.init({
  selector: 'textarea',
  plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
  menubar: 'file edit view insert format tools table help',
  toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
  image_advtab: true,
  importcss_append: true,
  file_picker_callback(callback) {
    // eslint-disable-next-line no-undef
    tinymce.activeEditor.windowManager.openUrl({
      title: 'Files',
      url: '/admin/jinber/tinymce/file_list',
      onMessage(api, detail) {
        callback(detail.message.src);
        // eslint-disable-next-line no-undef
        tinymce.activeEditor.windowManager.close();
      },
    });
  },
  template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
  template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
  height: 600,
  image_caption: true,
  quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
  noneditable_class: 'mceNonEditable',
  // toolbar_mode: 'sliding',
  contextmenu: 'link image table',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
  convert_urls: false,
});
