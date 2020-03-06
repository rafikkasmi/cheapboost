const OFFERS_DATA = [{
        Image: "./go.svg",
        Text: "العرض Go مخصص لأصحاب المشاريع أو المحلات على المستوى أو الولاية يغطي بوتيرة حتى 5000 شخص/يوم",
        threeDays: {
            Price: 1500,
            Cover: {
                from: 12000,
                to: 15000
            }
        },
        sevenDays: {
            Price: 2800,
            Cover: {
                from: 28000,
                to: 35000
            }
        },
        fifteenDays: {
            Price: 5000,
            Cover: {
                from: 45000,
                to: 75000
            }
        },
        oneMonth: {
            Price: 9000,
            Cover: {
                from: 90000,
                to: 150000
            }
        },
    },
    {
        Image: "./go+.svg",
        Text: "العرض Go+ خاص بالتشهير للمحلات وصفحات التسويق الالكتروني على مستوى الاقليم يغطي متابعين بوتيرة حتى 15000 شخص /يوميا",
        threeDays: {
            Price: 4500,
            Cover: {
                from: 36000,
                to: 55000
            }
        },
        sevenDays: {
            Price: 8400,
            Cover: {
                from: 84000,
                to: 105000
            }
        },
        fifteenDays: {
            Price: 15000,
            Cover: {
                from: 180000,
                to: 225000
            }
        },
        oneMonth: {
            Price: 26000,
            Cover: {
                from: 360000,
                to: 450000
            }
        },
    },
    {
        Image: "./pro.svg",
        Text: "العرض Pro خاص بأصحاب المحلات والصفحات المنتشرة على التراب الوطني يغطي متابعين بوتيرة حتى 25000 شخص /يوميا",
        threeDays: {
            Price: 7500,
            Cover: {
                from: 60000,
                to: 75000
            }
        },
        sevenDays: {
            Price: 14000,
            Cover: {
                from: 140000,
                to: 175000
            }
        },
        fifteenDays: {
            Price: 26000,
            Cover: {
                from: 300000,
                to: 375000
            }
        },
        oneMonth: {
            Price: 45000,
            Cover: {
                from: 600000,
                to: 750000
            }
        },
    }
]


document.querySelectorAll("img.offer").forEach(el => {
    el.addEventListener("click", (e) => {
        const i = el.getAttribute("data-id")
        const offerDetails = OFFERS_DATA[i]
        document.querySelector(".overlay img").setAttribute("src", offerDetails.Image)

        document.querySelector(".overlay .text p").textContent = offerDetails.Text
        document.querySelector(".three .price").textContent = ` ${offerDetails.threeDays.Price} دج`
        document.querySelector(".three .cover").textContent = `ما بين ${offerDetails.threeDays.Cover.from} و ${offerDetails.threeDays.Cover.to} شخص`

        document.querySelector(".seven .price").textContent = ` ${offerDetails.sevenDays.Price} دج`
        document.querySelector(".seven .cover").textContent = `ما بين ${offerDetails.sevenDays.Cover.from} و ${offerDetails.sevenDays.Cover.to} شخص`

        document.querySelector(".fifteen .price").textContent = ` ${offerDetails.fifteenDays.Price} دج`
        document.querySelector(".fifteen .cover").textContent = `ما بين ${offerDetails.fifteenDays.Cover.from} و ${offerDetails.fifteenDays.Cover.to} شخص`

        document.querySelector(".thirty .price").textContent = ` ${offerDetails.oneMonth.Price} دج`
        document.querySelector(".thirty .cover").textContent = `ما بين ${offerDetails.oneMonth.Cover.from} و ${offerDetails.oneMonth.Cover.to} شخص`


        //ANIMATIONS
        document.querySelector(".overlay").classList.add("active", 'animated', 'bounceInUp')
    })
})



document.querySelector(".arrow").addEventListener("click", () => {

    console.log("clicked")
    document.querySelector(".overlay").classList.remove("active", 'bounceInUp')
    document.querySelector(".overlay").classList.add('slideOutLeft', 'faster')

    setTimeout(() => {
        document.querySelector(".overlay").classList.remove('animated', 'slideOutLeft', 'faster')
    }, 500)
})



document.querySelector(".buGT").addEventListener("click", () => {
    moveDown(".main")
})