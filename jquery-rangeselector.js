/*!
 * Range Selector 1.0.3
 * https://github.com/jasonni/jquery-rangeselector
 *
 * Copyright 2013 Jason Ni 
 * Released under the MIT license
 */
(function ($) {

    // RangeSelector class definition
    // ==============================
    
    var RangeSelector = function ($context, prefix) {
        var $last,
            _lastId,
            _idstr,
            _isBatchTrigger = false, // avoid recursive click flag.
            PREFIX = prefix || 'range-select-';

        // Range selection whit shiftKey.
        $context.on('click', 'input[id^='+ PREFIX +']', function (e) {
            var $checkbox = $(e.target),
                idContainer = [],
                from,
                to,
                start,
                end;

            if (e.shiftKey && $last) {

                // if last id is the same, uncheck last checkbox.
                if (_idstr && _lastId === $last.prop('id')) {
                    
                    // batch click start.
                    _isBatchTrigger = true;

                    $(_idstr).trigger('click');

                    //batch click end.
                    _isBatchTrigger = false;

                    idContainer.length = 0;
                }
                from = $last.prop('id').replace(PREFIX, '') * 1;
                to = $checkbox.prop('id').replace(PREFIX, '') * 1;
                start = Math.min(from, to);
                end = Math.max(from, to);

                for (;start <= end; end--) {
                    idContainer.push('#' + PREFIX + end);
                }
                _idstr = idContainer.join(',');

                // batch click start.
                _isBatchTrigger = true;

                $(_idstr).not(':checked').trigger('click');
            
                //batch click end.
                _isBatchTrigger = false;

            } else {

                if (_isBatchTrigger) {
                    return;
                }

                $last = $checkbox;
                _lastId = $last.prop('id');
                _idstr = '';
            }

        });
    };    

    // RangeSelector plugin definition
    // ===============================

    $.fn.rangeselector = function (prefix) {
        return new RangeSelector($(this), prefix);
    };

    $.fn.rangeselector.Constructor = RangeSelector;

})(window.jQuery);
