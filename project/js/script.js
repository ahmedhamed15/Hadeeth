$(function() {
    'use strict';

    /* Start :: All Variables */
    var windowVar = $(window);
    /* End :: All Variables */

    /* Start : Add close icon for Maqased sidebar */
    if (windowVar.width() < 769) {
        $('.sidebar-maqased').append('<span class="close-maqased-sidebar"> <i class="fas fa-times"></i> </span>');
    }
    /* End : Add close icon for Maqased sidebar */

    /* Start : Sidebar */
    $('#sidebarCollapse-maqased, .close-maqased-sidebar').on('click', function () {
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
    /* End : Toggle search box in mobile */

    /* Start : Pie progress plugin In homepage */
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
    /* End : Pie progress plugin In homepage */

    /* Start : Copy function */
    function copyMessage(val) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
    /* End : Copy function */

    /* Start : Copy for Hadeeth text */
    $('.copyHadeeth').on('click', function() {
        copyMessage($('.hadeeth-body').text());
        swal("تم النسخ", "تم نسخ الحديث بنجاح", "success");
    });
    /* End : Copy for Hadeeth text */

    /* Start : Show and hide the password */
    $('.show-hide-password').on('click', function() {
        var passField = $('.main-form .password-field'),
            $this = $(this);
        if (passField.prop('type') == "password") {
            passField.prop('type', 'text');
            $this.find('svg.fa-lock').addClass('active').siblings().removeClass('active');
        } else {
            passField.prop('type', 'password');
            $this.find('svg.fa-lock').removeClass('active').siblings().addClass('active');
        }
    })
    /* End : Show and hide the password */
        

});