/*! PFUDOR.tk | MIT license | https://github.com/drweissbrot/pfudor.tk */

function applyFilters() {
    $('#player')
        .css('-webkit-filter', 'sepia(' + config.filters.sepia + '%) grayscale(' + config.filters.gray + '%) blur(' + config.filters.blur + 'px)')
        .css('filter', 'sepia(' + config.filters.sepia + '%) grayscale(' + config.filters.gray + '%) blur(' + config.filters.blur + 'px)');
}
