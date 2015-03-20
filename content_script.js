var App = {}, $body = $('body');
App.init = function() { };
App.on = function() { $body.on.apply($body, Array.prototype.slice(arguments)); };
App.trigger = function() { $body.trigger($body, Array.prototype.slice(arguments)); };

/**
 * sort by type
 */
var sorter = Object.create({
    init: function() {

        $body.on('click', '.j-Ta-pb.j-ia-e.a-Cs-A-e.a-d-e', $.proxy(function() {
            this._fetchMenu();
            this.$sortOptsBtn = $(this);
        },this));

        this.$itemTypeSort = null;
    },

    _fetchMenu: function() {
        var $menu = $('.j-A.j-A-Nj').filter(function() { return !this.style.display; });

        // triggered sort menu open
        if($menu.length === 1) {
            this.$menu = $menu;
            this._safeAddTypeSortOption();
        }
    },

    _safeAddTypeSortOption: function() {
        if(this.$menu.children('.sort_by_type')[0]) return;

        // create sort by type menu item
        var $item = this.$itemTypeSort = $(this.$menu.children().last()[0].outerHTML)
            .addClass('sort_by_type')
            .attr('id', ':30')
            .on('mouseenter', function() { $item.addClass('j-D-pc'); })
            .on('mouseleave', function() { $item.removeClass('j-D-pc'); })
            .on('click', $.proxy(this.sortByType, this))
            .appendTo(this.$menu);

        $item.children().html('Type');
    },

    sortByType: function() {
        this.$menu.hide();
        this.$sortOptsBtn.removeClass('j-ia-e-mb').attr('aria-expanded', false);
        console.log('SORT BY TYPE');
    }
});
sorter.init();
