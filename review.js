if ($('#ctl00_plcMain_DataList1').length > 0) {
  $.ajax({
    url: "http://www.cbc.ca/manitoba/scene/fringe/"
  }).success(function(response) {
      var title = "", stars = "";

      var reviews = document.implementation.createHTMLDocument('');
      reviews.documentElement.innerHTML = response;
      reviews = $(reviews).find('#reviews');

      $('#ctl00_plcMain_DataList1 table td:nth-child(2)').each(function(i) {
        title = $(this).text().replace(/\.{2,}/, "").replace(/^The /, "");

        stars = reviews.find("h3:contains('" + title + "') img").attr('alt');

        if (typeof stars != 'undefined') {
          $(this).next().append("<div style='float:right'>" + stars + "</div>");
        }
      });
  });
}