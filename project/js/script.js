$(function() {
    'use strict';

    /* Start :: All Variables */
    var windowVar = $(window);
    /* End :: All Variables */

    /* Start : Sidebar */
    $('#sidebarCollapse-maqased').on('click', function () {
        $('.sidebar-maqased, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#sidebarCollapse-main').on('click', function () {
        $('.main-sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    /* End : Sidebar */

    /* Start : Animation of main sidebar */
    $('#sidebarCollapse-main').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
    /* End : Animation of main sidebar */ 

    /* Start : Toggle search box in mobile */
    $('.toggle-search-section').on('click', function() {
        $('.search-form').toggleClass('active');
    }); 
    $('.pie_progress').asPieProgress({
        namespace: 'pie_progress',
        classes: {
        svg: 'pie_progress__svg',
        element: 'pie_progress',
        number: 'pie_progress__number',
        content: 'pie_progress__content'
        },
        min: 0,
        max: 100,
        goal: 100,
        size: 160,
        speed: 15, // speed of 1/100
        barcolor: '#ef1e25',
        barsize: '14',
        trackcolor: '#f2f2f2',
        fillcolor: 'none',
        easing: 'ease',
        numberCallback: function numberCallback(n) {
        'use strict';

        var percentage = Math.round(this.getPercentage(n));

        return percentage + '%';
        },

        contentCallback: null
      });
      $('.pie_progress').asPieProgress('start');

});