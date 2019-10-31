function getData() {
  // Populate the VS Code page with li tags of content

  $.get('./data/lists.json', data => {
    data.vsCode.forEach(item => {
      $('#vs-code-list').append(`<li>${item}</li>`);
    });
    // console.table(data.vsCode);
  });
}

getData();
