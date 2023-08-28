/*
 *  1: Life
 *  2: Car
 *  3: Stock
 *  4: IT/WEB
 *  5: Etc
 */

import { images } from "./img_list"
import { views } from "./img_view"

const sites = [
    {
        title: "더 클라세움",
        category: 5,
        url: "http://classeum.leaderscpa.com/",
        role: "50%",
        device: "PC, Mobile",
        cover: images.classeum
    },
    {
        title: "에이레벨랩스",
        category: 2,
        url: "https://leaderscpa.com/merchant/alevel/",
        role: "100%",
        device: "PC, Mobile",
        cover: images.alevel,
        view: views.alevel
    },
    {
        title: "깨GO빼GO",
        category: 5,
        url: "http://slimcare.playup.kr/",
        role: "70%",
        device: "PC, Mobile",
        cover: images.slimcare
    },
    {
        title: "코어백",
        category: 5,
        url: "https://www.corevac.com/",
        role: "100%",
        device: "PC only",
        cover: images.corevac,
        view: views.corevac
    },
    {
        title: "리더스오토솔루션",
        category: 2,
        url: "http://auto.carfly.me/",
        role: "70%",
        device: "PC, Mobile",
        cover: images.las,
        view: views.las
    },
    {
        title: "LAS-골드클래스",
        category: 2,
        url: "http://gold.carfly.me/",
        role: "60%",
        device: "PC, Mobile",
        cover: images.goldclass,
        view: views.goldclass
    },
    {
        title: "Calendar",
        category: 4,
        url: "https://didgustm.github.io/calendar/",
        role: "100%",
        device: "PC only",
        cover: images.calendar,
        view: views.calendar
    },
    {
        title: "TODO List",
        category: 4,
        url: "https://didgustm.github.io/todo_svelte/",
        role: "100%",
        device: "PC only",
        cover: images.todo,
        view: views.todo
    },
    {
        title: "8282에어크린",
        category: 1,
        url: "https://8282airclean.com/",
        role: "100%",
        device: "PC, Mobile",
        cover: images.airclean,
        view: views.airclean
    },
    {
        title: "패스트헌터",
        category: 2,
        url: "http://fasthunter.co.kr/",
        role: "50%",
        device: "Mobile only",
        cover: images.fasthunter
    },
    {
        title: "패스트헌터-Dealer",
        category: 2,
        url: "https://fasthunter.co.kr/dealer/signin/",
        role: "100%",
        device: "Mobile only",
        cover: images.fastDealer
    },
    {
        title: "이사방",
        category: 1,
        url: "https://leaderscpa.com/merchant/isabang/",
        role: "100%",
        device: "PC, Mobile",
        cover: images.isabang,
        view: views.isabang
    },
    {
        title: "스테이크",
        category: 3,
        url: "https://stake-in.com/",
        role: "100%",
        device: "PC, Mobile",
        cover: images.stake,
        view: views.stake
    },
    {
        title: "로또플라이",
        category: 1,
        url: "https://lottofly.co.kr/m/",
        role: "100%",
        device: "Mobile only",
        cover: images.lotto,
        view: views.lotto
    },
    {
        title: "퍼블링",
        category: 5,
        url: "https://publing.co.kr/",
        role: "100%",
        device: "PC, Mobile",
        cover: images.publing,
        view: views.publing
    },
    {
        title: "리더스CPA",
        category: 4,
        url: "https://leaderscpa.com/",
        role: "80%",
        device: "PC, Mobile",
        cover: images.cpa,
        view: views.cpa
    },
    {
        title: "마케팅플라이",
        category: 4,
        url: "https://mkfly.co.kr/",
        role: "70%",
        device: "PC, Mobile",
        cover: images.mkfly,
        view: views.mkfly
    },
    {
        title: "마플-인플루언서",
        category: 4,
        url: "https://mkfly.co.kr/influencer",
        role: "100%",
        device: "PC, Mobile",
        cover: images.mkinflu,
        view: views.mkinflu
    },
    // {
    //     title: "한국재무컨설팅센터",
    //     category: 3,
    //     url: "https://k-finco.com/",
    //     role: "30%",
    //     device: "PC, Mobile"
    // },
    {
        title: "제주찬가",
        category: 1,
        url: "https://leaderscpa.com/merchant/jejuchanga/",
        role: "100%",
        device: "PC, Mobile",
        cover: images.jeju,
        view: views.jejuchanga
    },
    // {
    //     title: "청개구리주식스쿨",
    //     category: 3,
    //     url: "https://leaderscpa.com/merchant/chunginschool/",
    //     role: "100%",
    //     device: "PC, Mobile"
    // },
    // {
    //     title: "멘토데스크",
    //     category: 3,
    //     url: "https://leaderscpa.com/merchant/mentordesk/",
    //     role: "100%",
    //     device: "PC, Mobile"
    // },
    // {
    //     title: "청개구리Labs",
    //     category: 3,
    //     url: "https://leaderscpa.com/merchant/chunginlabs3/",
    //     role: "100%",
    //     device: "PC, Mobile"
    // },
    // {
    //     title: "강한투자클럽",
    //     category: 3,
    //     url: "https://leaderscpa.com/merchant/kanghan/",
    //     role: "100%",
    //     device: "PC, Mobile"
    // },
    {
        title: "올플라이",
        category: 4,
        url: "https://leaderscpa.com/merchant/allfly/",
        role: "100%",
        device: "PC, Mobile",
        cover: images.allfly,
        view: views.allfly
    },
    // {
    //     title: "청개구리투자클럽",
    //     category: 3,
    //     url: "https://leaderscpa.com/merchant/chungin2/",
    //     role: "100%",
    //     device: "PC, Mobile"
    // },
    {
        title: "에이플라이",
        category: 2,
        url: "https://afly.co.kr/",
        role: "100%",
        device: "PC, Mobile",
        cover: images.afly
    },
    {
        title: "아이써치마케팅",
        category: 4,
        url: "https://leaderscpa.com/merchant/isearch/",
        role: "100%",
        device: "PC, Mobile",
        cover: images.isearch,
        view: views.isearch
    }
]

export { sites }