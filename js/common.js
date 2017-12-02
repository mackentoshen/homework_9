//--------------- INDEX 1 --------------- //

//////// ADD /////////

$(document).ready (function () {
    $('.add-class-btn').on('click', function () {
        $(this).addClass('new-button');
    });
});

////// REMOVE ////////

$(document).ready (function () {
    $('.remove-class-btn').on('click', function () {
        $(this).removeClass('new-button');
    });
});

/////// TOGGLE ///////

$(document).ready (function () {
    $('.toggle-btn').on('click', function () {
        $(this).toggleClass('btn-color');
    })
});

/////// GETATTR ///////

$(document).ready (function () {
    $('.get-attr-btn').on('click', function () {
        console.log($(this).attr('type'));
    })
});

/////// SETATTR ///////

$(document).ready (function () {
    $('.set-attr-btn').on('click', function () {
        console.log($(this).attr('value', 'SetAttr'));
    })
});

/////// ALERTONCLICK //////

$(document).ready (function () {
    $('.alert-btn').on('click', function () {
        alert ('Surprise motherfucker!!!');
    })
});

/////// TRIGGERALERT ///////

$(document).ready (function () {
    $('.trigger-btn').on('click', function () {
        $('.alert-btn').trigger("click");
    })
});

/////// CLONETHIS ////////

$(document).ready (function () {
    $('.clone-btn').on('click', function () {
        $(this).after($(this).clone().text('cloned'));
    })
});

/////// CLOSEELEMENT /////////

$(document).ready (function () {
    $('.close-elem-btn').on('click', function () {
        console.log($(this).parent());
    })
});

// jQuery(function ($) {
//
// })

// (function () {
//
// })();

/////// EACHBUTTON //////////

// $(document).ready (function () {
//     $('.eachBtnText').on('click', function () {
//         console.log('click');
//         var a = $('.button-container').find('.button-items button');
//         jQuery.each(a, function( i, val ) {
//             console.log(val);
//         });
//     })
// });

$(document).ready (function () {
    $('.eachBtnText').on('click', function () {
        $('button').each(function () {
            console.log($(this).html());
        });
    })
});

//////// FINDBBUTTON /////////

$(document).ready (function () {
    $('.find-me-btn').on('click', function () {
        var val = $('body').find($(this));
        console.log(val)
    })
});

/////// FADEINTEXT //////////

$(document).ready (function () {
    $('.fade-in-btn').on('click', function () {
        $('.text-on').fadeIn('slow')
    })
});

/////// FADEOUTTEXT //////////

$(document).ready (function () {
    $('.fade-out-btn').on('click', function () {
        $('.fade-out-text').fadeOut('slow', function () {
            $('.fadeout-string').html('Ooops!!!');
        });
    });
});

/////// HIDETEXT /////////////

$(document).ready (function () {
    $('.hide-btn').on('click', function () {
        $('.hidden-text').hide(2000);
    });
});

/////// SHOWTEXT ///////////

$(document).ready (function () {
    $('.show-btn').on('click', function () {
        $('.show-text').show('slow');
    });
});

//////// DATAABOUTME /////////

$(document).ready (function () {
    $('.data-about-me-btn').on('click', function () {

        console.log('Height:' + $(this).height() + ',',
            'Width:' + $(this).width() + ',',
            'Position ablosute X:' + $(this).position().left + ',',
            'Position ablosute Y:' + $(this).position().top + ',',
            'Attribute value:' + $(this).attr('class') + ',',
            'Parent element:' + $(this).parent().prop('tagName') + ',',
            'Neighbour top:' + $(this).prev().text() + ',',
            'Neighbour bottom:' + $(this).next().text() + ',',
            'Button text:' + $(this).text() + '.'
        )
    });
});


//----------------------INDEX 2 ------------------//

//////////// CHANGE ///////////

$(document).ready (function () {
    $('input').change(function () {
        console.log($(this).val())
    })
});

////////// SUBMIT ////////////

$(document).ready (function () {
    $('#form').on('submit', function (event) {
        console.log($(this).serialize());
       event.preventDefault();
    });
});

///////// DUPLICATE VALUE ////////

$(document).ready (function () {

   $('#input2').keyup(function () {
      $('#input1').val($(this).val());
   });
});

///////// KEYS ////////////////

$(document).ready (function () {
    $('.field-text').keypress(function () {
        var KeyPR = this.value;
        console.log(KeyPR);
    });
});




