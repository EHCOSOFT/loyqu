
$(document).ready(function () {
    // 공통 jQuery 코드 (모바일과 PC 모두에 적용)
    function applyCommonjQuery() {
        $("#header").append(Header());

        function Header() {
            return `
            <div class="container">
                <div class="header-wrap">
                    <a href="#" class="header-logo">
                        <img src="img/logo.png" alt="LOYQU">
                    </a>
                    <ul>
                        <li class="dropdown">
                            <a href="javascript:void(0);">
                                <i class="ico i-global"></i>한국어<i class="ico i-dropdown"></i>
                            </a>
                            <div class="dropdown-list">
                                <ul>
                                    <li><a href="#">한국어</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="javascript:void(0);"><i class="ico i-login"></i>로그인</a></li>
                       <!-- <li><a href="javascript:void(0);"><i class="ico i-mypage"></i>마이페이지</a></li>
                        <li><a href="javascript:void(0);"><i class="ico i-logout"></i>로그아웃</a></li> -->
                    </ul>
                </div>
            </div>
            `
        };

        // 모달 열기 버튼 클릭 이벤트
        $(".open-modal").click(function () {
            var modalId = $(this).data("modal-id");
            $("#" + modalId).addClass("active");
            $("body").css("overflow", "hidden");
            // window.addEventListener("wheel", removeDefaultEvent, { passive: false });
        });

        // 모달 닫기 버튼 및 모달 바깥 영역 클릭 이벤트
        $(".btn-modal-close, .modal-wrap").click(function () {
            $(".modal-wrap").removeClass("active");
            $("body").css("overflow", "auto");
            // window.removeEventListener("wheel", removeDefaultEvent);
        });

        // 모달 내부 클릭 시 닫기 방지
        $(".modal-content").click(function (e) {
            e.stopPropagation();
        });

        // tab
        $('.tabs a').on('click', function (event) {
            event.preventDefault();

            // 탭의 활성화 상태 변경
            $('.tabs li').removeClass('active');
            $(this).parent().addClass('active');

            // 콘텐츠의 활성화 상태 변경
            var tabId = $(this).attr('href');
            $('.tab-content').removeClass('active');
            $(tabId).addClass('active');
        });

        // header dropdown event 
        // .dropdown을 클릭할 때 active 클래스를 토글
        $('.dropdown > a').click(function (event) {
            event.stopPropagation();
            $('.dropdown-list').toggleClass('active');
        });

        // 검색 버튼 클릭 시
        // .btn-search 버튼 클릭 시
        $('.btn-search').click(function () {
            var searchText = $('#addressSearch').val().trim();

            // 예시
            // "해운대"를 검색한 경우
            if (searchText === '해운대') {
                $('.search-list ul').html('<li><b>검색결과</b> 해운대</li>');
                $('.search-list').addClass('active');
            } else {
                // 검색어가 "해운대"가 아닌 경우
                $('.search-list ul').html('<li>검색 결과가 없습니다</li>');
                $('.search-list').addClass('active');
            }
        });

        // 입력 필드에서 엔터 키를 눌렀을 때도 검색을 실행
        $('#addressSearch').keypress(function (event) {
            if (event.which === 13) { // Enter 키의 키코드는 13
                $('.btn-search').click();
            }
        });

        // 입력 필드에서 엔터 키를 눌렀을 때도 검색을 실행
        $('#addressSearch').keypress(function (event) {
            if (event.which === 13) { // Enter 키의 키코드는 13
                $('.btn-search').click();
            }
        });

        // .dropdown-list 외부를 클릭할 때 active 클래스를 제거
        $(document).click(function (event) {
            if (!$(event.target).closest('.dropdown').length) {
                $('.dropdown-list').removeClass('active');
            }
        });

        // detailSwiper
        var detailSwiper = new Swiper(".detailSwiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            slidesPerView: 1,
        });

        // orderSwiper
        var orderSwiper = new Swiper(".orderSwiper", {
            navigation: {
                nextEl: ".order-swiper-button-next",
                prevEl: ".order-swiper-button-prev",
            },
            slidesPerView: 3,
            spaceBetween: 12,
        });

        var orderSwiper02 = new Swiper(".orderSwiper02", {
            navigation: {
                nextEl: ".order-swiper-button-next-02",
                prevEl: ".order-swiper-button-prev-02",
            },
            slidesPerView: 3,
            spaceBetween: 12,
        });

        //datepicker
        // https://mobiscroll.com/docs/jquery/datepicker/api#opt-themeVariant
        $('.datepicker ')
            .mobiscroll()
            .datepicker({
                controls: ['calendar'],
                display: 'anchored',
            });

        $('.timepicker ')
            .mobiscroll()
            .datepicker({
                controls: ['time'],
                display: 'anchored',
            });
    }

    // 반응형 jQuery 코드
    function applyResponsivejQuery() {
        var windowWidth = $(window).width();

        if (windowWidth <= 992) {
            // 모바일 전용 jQuery 코드
            // 메인 swiper
            var swiper = new Swiper(".mainSwiper", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                effect: "coverflow",
                slidesPerView: 1.2,
                spaceBetween: 0,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 200,
                    depth: 140,
                    modifier: 1.5,
                    slideShadows: true
                },
                grabCursor: true,
                centeredSlides: true,
                loop: true,
            });
        } else {
            // PC 전용 jQuery 코드
            // 메인 swiper
            var swiper = new Swiper(".mainSwiper", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                effect: "coverflow",
                slidesPerView: 1.2,
                spaceBetween: 0,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 380,
                    depth: 140,
                    modifier: 1.5,
                    slideShadows: true
                },
                grabCursor: true,
                centeredSlides: true,
                loop: true,
            });
        }
    }

    // 공통 jQuery 적용
    applyCommonjQuery();

    // 반응형 jQuery 적용
    applyResponsivejQuery();

    // 창 크기 조정 시 반응형 jQuery 적용
    $(window).resize(applyResponsivejQuery);
});

mobiscroll.setOptions({
    locale: mobiscroll.localeKo, // 언어
    theme: 'ios',                // 테마
    themeVariant: 'light',
    dateFormat: 'YYYY-MM-DD',
    dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
});
