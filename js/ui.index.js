$('#submit-big-form').on('click', function(evt) {
  evt.preventDefault();

  var $fields = $('#big-form').find('input, select, textarea').not(':submit');

  var formData = {};

  $fields.each(function() {
    // Only checked radio buttons should contribute to the object.
    if (this.type === 'radio' && !this.checked)
      return;

    // For checkbox groups, create an array of selected values.
    if (this.type === 'checkbox') {
      if (this.checked) {
        // Ensure that this checkbox group's array has been initialized.
        formData[this.name] = formData[this.name] || [];

        formData[this.name].push(this.value);
      }

      return;
    }

    // Else, for the majority of input types, just map formData.name = formData.value.
    //
    // Using jQuery's .val() here to use the same code for regular inputs, selects, and
    //  selected radio button inputs.
    formData[this.name] = $(this).val();
  });

  console.log(formData);
});