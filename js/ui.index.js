$('#submit-big-form').on('click', function(evt) {
    evt.preventDefault();

    var $fields = $('#big-form').find('input, select, textarea').not(':submit');

    var formData = { };

    $fields.each(function() {
        // Only checked radio buttons should contribute to the object.
        if (this.type === 'radio' && !this.checked)
            return;

        // Else
        formData[this.name] = $(this).val();
    });

    console.log(formData);
});