/* eslint-disable */
$(function(){

    /* tab버튼 CSS 적용 시작*/
    $("button.tabBtn").click(function(){
        $("button.tabBtn").css({
           "border":"1px solid #aaa",
            "background-color":"#eee"
        });


        $(this).css({
           "border-bottom-color":"#fff",
            "background-color":"#fff"
        });
       /* tab버튼 CSS 적용 끝*/


        /* tabBtn일치하는 내용 CSS적용 시작*/
        $("div.tabContents").css({
            "display":"none"});

        /*탭버튼 클릭햇을 경우
        클릭한 버튼의 data-link속성값을 가져와서 저장함
        var 변수 = $(this).attr("data-link"); */
        var dataLink = $(this).attr("data-link");

        $("#"+dataLink).css({"display":"block"});
    });
    /* tabBtn일치하는 내용 CSS적용 끝*/


    /*모달 레이어 팝업 시작*/
    $("#popPoint").click(function(){
        $("div#layerBG").css({"display":"block"});
    });

    $("#closeBtn").click(function(){
                $("div#layerBG").css({"display":"none"});

    });


    /*모달 레이어 팝업 끝*/

});




















