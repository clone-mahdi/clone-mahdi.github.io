document.addEventListener("DOMContentLoaded", ()=> {
    item1.onclick = ()=> {
        if (A.style.height !== "50px") {
            A.style.height = "50px";
            B.style.height = "0";
            C.style.height = "0";
            D.style.height = "0";
            Bb.style.height = "0";
        } else {
            A.style.height = "0";
        }
    }
    item2.onclick = ()=> {
        if (B.style.height !== "50px") {
            A.style.height = "0";
            B.style.height = "50px";
            C.style.height = "0";
            D.style.height = "0";
            Bb.style.height = "0";
        } else {
            B.style.height = "0";
            Bb.style.height = "0";
        }
    }
    item3.onclick = ()=> {
        if (C.style.height !== "50px") {
            A.style.height = "0";
            B.style.height = "0";
            C.style.height = "50px";
            D.style.height = "0";
            Bb.style.height = "0";
        } else {
            C.style.height = "0";
        }
    }
    item4.onclick = ()=> {
        if (D.style.height !== "50px") {
            A.style.height = "0";
            B.style.height = "0";
            C.style.height = "0";
            D.style.height = "50px";
            Bb.style.height = "0";
        } else {
            D.style.height = "0";
        }
    }
    // A
    removeA.onclick = ()=> {
        head.innerHTML = '<rect id="poster" x="25" y="25" width="950" height="950" rx="500" ry="500" stroke="#fff" stroke-linecap="round" stroke-width="50" fill="none" stroke-dasharray="10%"/>';
    }
    A1.onclick = ()=> {
        head.innerHTML = '<circle cx="500" cy="500" r="500" fill="url(#gr00)"/><ellipse cx="500" cy="200" rx="320" ry="180" fill="url(#gr01)"/>';
    }
    A2.onclick = ()=> {
        head.innerHTML = '<circle cx="500" cy="500" r="500" fill="url(#gr00)"/><circle cx="500" cy="500" r="500" fill="url(#gr11)"/><ellipse cx="500" cy="200" rx="320" ry="180" fill="url(#gr01)"/>';
    }
    A3.onclick = ()=> {
        head.innerHTML = '<circle cx="500" cy="500" r="500" fill="url(#gr00)"/><circle cx="500" cy="500" r="500" fill="url(#gr12)"/><ellipse cx="500" cy="200" rx="320" ry="180" fill="url(#gr01)"/>';
    }
    A4.onclick = ()=> {
        head.innerHTML = '<circle cx="500" cy="500" r="500" fill="url(#gr00)"/><circle cx="500" cy="500" r="500" fill="url(#gr14)"/><ellipse cx="500" cy="200" rx="320" ry="180" fill="url(#gr01)"/>';
    }
    A5.onclick = ()=> {
        head.innerHTML = '<circle cx="500" cy="500" r="500" fill="url(#gr00)"/><circle cx="500" cy="500" r="500" fill="url(#gr15)"/><ellipse cx="500" cy="200" rx="320" ry="180" fill="url(#gr01)"/>';
    }
    A6.onclick = ()=> {
        head.innerHTML = '<circle cx="500" cy="500" r="500" fill="url(#gr16)"/><ellipse cx="500" cy="200" rx="320" ry="180" fill="url(#gr01)"/>';
    }
    A7.onclick = ()=> {
        head.innerHTML = '<circle cx="500" cy="500" r="500" fill="url(#gr17)"/><ellipse cx="500" cy="200" rx="320" ry="180" fill="url(#gr01)"/>';
    }
    // B
    A8.onclick = ()=> {
        head.innerHTML = '<circle cx="500" cy="500" r="500" fill="url(#gr18)"/><ellipse cx="500" cy="200" rx="320" ry="180" fill="url(#gr01)"/>';
    }
    A9.onclick = ()=> {
        head.innerHTML = '<circle cx="500" cy="500" r="500" fill="url(#gr18)"/><circle cx="500" cy="500" r="500" fill="url(#gr19)"/><ellipse cx="500" cy="200" rx="320" ry="180" fill="url(#gr01)"/>';
    }
    A10.onclick = ()=> {
        head.innerHTML = '<circle cx="500" cy="500" r="500" fill="url(#gr20)"/><ellipse cx="500" cy="200" rx="320" ry="180" fill="url(#gr01)"/>';
    }
    // B
    removeB.onclick = ()=> {
        eyer.innerHTML = '';
        eyel.innerHTML = '';
        Bb.style.height = "50px";
    }
    B1.onclick = ()=> {
        eyer.innerHTML = '<rect x="650" y="250" width="150" height="250" rx="75"/><rect x="670" y="270" width="110" height="210" rx="55" fill="url(#gr03)" filter="url(#fe00)" opacity="0.8"/><rect x="720" y="300" width="40" height="150" rx="20" fill="url(#gr04)" filter="url(#fe00)"/>';
        eyel.innerHTML = '<rect x="200" y="250" width="150" height="250" rx="75"/><rect x="220" y="270" width="110" height="210" rx="55" fill="url(#gr03)" filter="url(#fe00)" opacity="0.8"/><rect x="270" y="300" width="40" height="150" rx="20" fill="url(#gr04)" filter="url(#fe00)"/>';
        Bb.style.height = "50px";
    }
    B2.onclick = ()=> {
        eyer.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 780,450 620,450 740,330"/>';
        eyel.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 220,450 380,450 260,330"/>';
        Bb.style.height = "50px";
    }
    B3.onclick = ()=> {
        eyer.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 780,400 620,400"/>';
        eyel.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 220,400 380,400"/>';
        Bb.style.height = "50px";
    }
    B4.onclick = ()=> {
        eyer.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 600,450 A 110 110 0 0 1 800,450"/>';
        eyel.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 200,450 A 110 110 0 0 1 400,450"/>';
        Bb.style.height = "50px";
    }
    B5.onclick = ()=> {
        eyer.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 600,450 A 110 110 0 0 0 800,450"/>';
        eyel.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 200,450 A 110 110 0 0 0 400,450"/>';
        Bb.style.height = "50px";
    }
    B6.onclick = ()=> {
        eyer.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 600,300 800,500 M 800,300 600,500"/>';
        eyel.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 200,300 400,500 M 200,500 400,300"/>';
        Bb.style.height = "50px";
    }
    B7.onclick = ()=> {
        eyer.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 700,350 A 1 1 0 0 0 800,350 A 1 1 0 0 0 600,350 A 1 1 0 0 0 900,350"/>';
        eyel.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 300,400 A 1 1 0 0 0 200,400 A 1 1 0 0 0 400,400 A 1 1 0 0 0 100,400"/>';
        Bb.style.height = "50px";
    }
    B8.onclick = ()=> {
        eyer.innerHTML = '<circle cx="700" cy="400" r="130" fill="#fff"/><circle cx="700" cy="400" r="130" fill="url(#gr10)"/><circle cx="700" cy="400" r="80" fill="url(#gr13)"/><circle cx="700" cy="400" r="50" fill="#000" filter="url(#fe00)"/><ellipse cx="700" cy="380" rx="35" ry="15" fill="#fff5" transform="rotate(25 650 300)"/>';
        eyel.innerHTML = '<circle cx="300" cy="400" r="130" fill="#fff"/><circle cx="300" cy="400" r="130" fill="url(#gr10)"/><circle cx="300" cy="400" r="80" fill="url(#gr13)"/><circle cx="300" cy="400" r="50" fill="#000" filter="url(#fe00)"/><ellipse cx="300" cy="380" rx="35" ry="15" fill="#fff5" transform="rotate(25 250 300)"/>';
        Bb.style.height = "50px";
    }
    B9.onclick = ()=> {
        eyer.innerHTML = '<circle cx="700" cy="400" r="130" fill="#fff"/><circle cx="700" cy="400" r="130" fill="url(#gr10)"/><circle cx="700" cy="400" r="50" fill="url(#gr13)"/><circle cx="700" cy="400" r="30" fill="#000" filter="url(#fe00)"/><ellipse cx="700" cy="380" rx="35" ry="15" fill="#fff5" transform="rotate(25 650 300)"/>';
        eyel.innerHTML = '<circle cx="300" cy="400" r="130" fill="#fff"/><circle cx="300" cy="400" r="130" fill="url(#gr10)"/><circle cx="300" cy="400" r="50" fill="url(#gr13)"/><circle cx="300" cy="400" r="30" fill="#000" filter="url(#fe00)"/><ellipse cx="300" cy="380" rx="35" ry="15" fill="#fff5" transform="rotate(25 250 300)"/>';
        Bb.style.height = "50px";
    }
    B10.onclick = ()=> {
        eyer.innerHTML = '<circle fill="#fff" cx="700" cy="390" r="140"/><circle fill="url(#gr10)" cx="700" cy="390" r="140"/><circle fill="url(#gr13)" cx="700" cy="390" r="110"/><circle fill="#000" cx="700" cy="390" r="90"/><circle fill="#fff" cx="680" cy="350" r="30"/><circle fill="#fff" cx="750" cy="380" r="35"/><circle fill="#fff" cx="700" cy="440" r="25"/><ellipse cx="670" cy="390" rx="35" ry="15" fill="#fff5" transform="rotate(25 650 300)"/>';
        eyel.innerHTML = '<circle fill="#fff" cx="300" cy="390" r="140"/><circle fill="url(#gr10)" cx="300" cy="390" r="140"/><circle fill="url(#gr13)" cx="300" cy="390" r="110"/><circle fill="#000" cx="300" cy="390" r="90"/><circle fill="#fff" cx="280" cy="350" r="30"/><circle fill="#fff" cx="350" cy="380" r="35"/><circle fill="#fff" cx="300" cy="440" r="25"/><ellipse cx="270" cy="390" rx="35" ry="15" fill="#fff5" transform="rotate(25 250 300)"/>';
        Bb.style.height = "50px";
    }
    Bb1.onclick = ()=> {
        eyer.innerHTML = '<rect x="650" y="250" width="150" height="250" rx="75"/><rect x="670" y="270" width="110" height="210" rx="55" fill="url(#gr03)" filter="url(#fe00)" opacity="0.8"/><rect x="720" y="300" width="40" height="150" rx="20" fill="url(#gr04)" filter="url(#fe00)"/>';
    }
    Bb2.onclick = ()=> {
        eyer.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 780,450 620,450 740,330"/>';
    }
    Bb3.onclick = ()=> {
        eyer.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 780,400 620,400"/>';
    }
    Bb4.onclick = ()=> {
        eyer.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 600,450 A 110 110 0 0 1 800,450"/>';
    }
    Bb5.onclick = ()=> {
        eyer.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 600,450 A 110 110 0 0 0 800,450"/>';
    }
    Bb6.onclick = ()=> {
        eyer.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 600,300 800,500 M 800,300 600,500"/>';
    }
    Bb7.onclick = ()=> {
        eyer.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M 700,350 A 1 1 0 0 0 800,350 A 1 1 0 0 0 600,350 A 1 1 0 0 0 900,350"/>';
    }
    Bb8.onclick = ()=> {
        eyer.innerHTML = '<circle cx="700" cy="400" r="130" fill="#fff"/><circle cx="700" cy="400" r="130" fill="url(#gr10)"/><circle cx="700" cy="400" r="80" fill="url(#gr13)"/><circle cx="700" cy="400" r="50" fill="#000" filter="url(#fe00)"/><ellipse cx="700" cy="380" rx="35" ry="15" fill="#fff5" transform="rotate(25 650 300)"/>';
    }
    Bb9.onclick = ()=> {
        eyer.innerHTML = '<circle cx="700" cy="400" r="130" fill="#fff"/><circle cx="700" cy="400" r="130" fill="url(#gr10)"/><circle cx="700" cy="400" r="50" fill="url(#gr13)"/><circle cx="700" cy="400" r="30" fill="#000" filter="url(#fe00)"/><ellipse cx="700" cy="380" rx="35" ry="15" fill="#fff5" transform="rotate(25 650 300)"/>';
    }
    Bb10.onclick = ()=> {
        eyer.innerHTML = '<circle fill="#fff" cx="700" cy="390" r="140"/><circle fill="url(#gr10)" cx="700" cy="390" r="140"/><circle fill="url(#gr13)" cx="700" cy="390" r="110"/><circle fill="#000" cx="700" cy="390" r="90"/><circle fill="#fff" cx="680" cy="350" r="30"/><circle fill="#fff" cx="750" cy="380" r="35"/><circle fill="#fff" cx="700" cy="440" r="25"/><ellipse cx="670" cy="390" rx="35" ry="15" fill="#fff5" transform="rotate(25 650 300)"/>';
    }
    // C
    removeC.onclick = ()=> {
        mouth.innerHTML = '';
    }
    C1.onclick = ()=> {
        mouth.innerHTML = '<path fill="none" stroke-linecap="round" stroke="#000" stroke-width="40" d="M 270 620 C 350 800 650 800 730 620"/>';
    }
    C2.onclick = ()=> {
        mouth.innerHTML = '<path transform="rotate(180 500 680)" fill="none" stroke-linecap="round" stroke="#000" stroke-width="40" d="M 270 620 C 350 800 650 800 730 620"/>';
    }
    C3.onclick = ()=> {
        mouth.innerHTML = '<path fill="none" stroke-linecap="round" stroke="#000" stroke-width="40" d="M 270,680 730,680"/>';
    }
    C4.onclick = ()=> {
        mouth.innerHTML = '<path fill="none" stroke-linecap="round" stroke-linejoine="round" stroke="#000" stroke-width="40" stroke-linejoin="round" d="M 300,710 350,650 400,710 450,650 500,710 550,650 600,710 650,650 700,710"/>';
    }
    C5.onclick = ()=> {
        mouth.innerHTML = '<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="#000" stroke-width="40" d="M 480,630 C 540,580 640,660 550,710 C 640,760 540,840 480,790"/>';
    }
    C6.onclick = ()=> {
        mouth.innerHTML = '<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="#000" stroke-width="40" d="M 480,630 C 540,580 640,660 550,710 C 640,760 540,840 480,790"/><path filter="url(#fe01)" transform="rotate(20 800 800)scale(4.5)translate(125 135)" fill="url(#gr05)" stroke-linejoin="round" stroke-linrcap="rounf" d="m17.718 8.893c6.457 0 12.902 4.058 14.274 8.78 1.012-4.496 7.61-8.735 14.256-8.735 5.17 0 10.368 2.564 12.99 9.567 6.445 17.219-25 33.753-27.247 35.799-2.247-2.575-33.69-18.284-27.241-35.789 2.58-7.003 7.778-9.623 12.968-9.622"/>';
    }
    C7.onclick = ()=> {
        mouth.innerHTML = '<path fill="url(#gr06)" d="M 250,630 Q 250,580 300,580 L 700,580 Q 750,580 750,630 A 1 1 0 0 1 250,630 z"/><path fill="url(#gr07)" d="M 300,580 Q 300,630 350,630 L 650,630 Q 700,630 700,580 z"/>';
    }
    C8.onclick = ()=> {
        mouth.innerHTML = '<g clip-path="url(#cp00)"><path fill="url(#gr06)" d="M 250,630 Q 250,580 300,580 L 700,580 Q 750,580 750,630 A 1 1 0 0 1 250,630 z"/><path fill="url(#gr07)" stroke="url(#gr07)" stroke-linejoin="round" stroke-linecap="round" stroke-width="80" d="M 300,570 330,660 670,660 700,570 z M 330,760 670,760 700,900 300,900 z"/></g>';
    }
    C9.onclick = ()=> {
        mouth.innerHTML = '<path fill="url(#gr06)" stroke="url(#gr06)" stroke-width="80" stroke-linejoin="round" d="M 400,600 500,890 600,600 z"/><path fill="url(#gr07)" d="M 400,560 Q 400,620 450,620 L 550,620 Q 600,620 600,560 z"/>';
    }
    C10.onclick = ()=> {
        mouth.innerHTML = '<circle fill="url(#gr06)" cx="500" cy="720" r="180"/>';
    }
    C11.onclick = ()=> {
        mouth.innerHTML = '<ellipse fill="url(#gr06)" cx="500" cy="720" rx="100" ry="200"/>';
    }
    C12.onclick = ()=> {
        mouth.innerHTML = '<circle fill="url(#gr06)" cx="500" cy="720" r="100"/>';
    }
    C13.onclick = ()=> {
        mouth.innerHTML = '<g clip-path="url(#cp01)"><path fill="url(#gr06)" transform="scale(1.3)translate(-120 -150)" d="M 330,760 C 360,550 650,550 670,760 C 670,830 600,810 600,810 C 520,770 480,770 400,810 C 400,810 330,830 330,760z"/><path fill="url(#gr07)" d="M 350,550 350,600 Q 350,650 400,650 L 600,650 Q 650,650 650,600 L 650,550 z"/></g>';
    }
    C14.onclick = ()=> {
        mouth.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-width="40" d="M 420,650 580,800 M 420,800 580,650"/>';
    }
    C15.onclick = ()=> {
        mouth.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-width="40" transform="rotate(-5 500 700)" d="M 300,700 Q 400,580 500,700 T 700,700"/>';
    }
    C16.onclick = ()=> {
        mouth.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-width="40" d="M 300,750 600,750 A 100 100 1 0 0 700,650"/>';
    }
    C17.onclick = ()=> {
        mouth.innerHTML = '<path fill="none" stroke="#000" stroke-linecap="round" stroke-width="40" d="M 700,700 400,700 A 100 100 1 0 0 300,800"/>';
    }
    C18.onclick = ()=> {
        mouth.innerHTML = '<path transform="rotate(-15 500 700)" fill="none" stroke-linecap="round" stroke="#000" stroke-width="40" d="M 270 700 730 700"/>';
    }
    C19.onclick = ()=> {
        mouth.innerHTML = '<path fill="url(#gr06)" d="M 250,630 Q 250,580 300,580 L 700,580 Q 750,580 750,630 A 1 1 0 0 1 250,630 z"/><path fill="url(#gr07)" d="M 300,580 Q 300,630 350,630 L 650,630 Q 700,630 700,580 z"/><path fill="url(#gr08)" stroke-linejoin="round" d="M 450,700 Q 400,700 400,750 C 400,1050 600,1050 600,750 Q 600,700 550,700 z"/><path stroke="#0003" stroke-width="20"  stroke-linecap="round" d="M 500,800 500 910"/>';
    }
    C20.onclick = ()=> {
        mouth.innerHTML = '<ellipse fill="url(#gr06)" cx="500" cy="720" rx="100" ry="200"/><path fill="url(#gr08)" stroke-linejoin="round" d="M 450,700 Q 400,700 400,750 C 400,1050 600,1050 600,750 Q 600,700 550,700 z"/><path stroke="#0003" stroke-width="20" stroke-linecap="round" d="M 500,800 500 910"/>';
    }
    C21.onclick = ()=> {
        mouth.innerHTML = '<g clip-path="url(#cp01)"><path fill="url(#gr06)" transform="scale(1.3)translate(-120 -150)" d="M 330,760 C 360,550 650,550 670,760 C 670,830 600,810 600,810 C 520,770 480,770 400,810 C 400,810 330,830 330,760z"/><path fill="url(#gr07)" d="M 350,550 350,600 Q 350,650 400,650 L 600,650 Q 650,650 650,600 L 650,550 z"/></g><path fill="url(#gr08)" stroke-linejoin="round" d="M 450,700 Q 400,700 400,750 C 400,1050 600,1050 600,750 Q 600,700 550,700 z"/><path stroke="#0003" stroke-width="20" stroke-linecap="round" d="M 500,800 500 910"/>';
    }
    C22.onclick = ()=> {
        mouth.innerHTML = '<path stroke="#000" stroke-width="40" stroke-linejoin="round" stroke-linecap="round" fill="none" d="M 300,600 A 1 1 1 1 1 300,800 M 700,600 A 1 1 1 1 0 700,800 M 400,700 600,700"/>';
    }
    C23.onclick = ()=> {
        mouth.innerHTML = '<g clip-path="url(#cp01)"><path fill="url(#gr06)" transform="scale(1.3)translate(-120 -150)" d="M 330,760 C 360,550 650,550 670,760 C 670,830 600,810 600,810 C 520,770 480,770 400,810 C 400,810 330,830 330,760"/><path fill="url(#gr07)" d="M 350,550 350,600 Q 350,650 400,650 L 600,650 Q 650,650 650,600 L 650,550 z"/></g><path fill="url(#gr09)" stroke-linecap="round" stroke-linejoin="round" stroke="url(#gr09)" stroke-width="20" d="M 450,700 Q 400,700 400,750 L 400,900 300,880 360,920 220,960 300,980 270,990 730,990 700,980 780,960 640,920 700,880 600,900 600,750 Q 600,700 550,700 z"/><path stroke-linecap="round" stroke="#0008" stroke-width="30" d="M 450,780 450,810 M 550,800 550,830 M 480,850 480,880 M 540,920 540,950"/><path stroke-linecap="round" stroke="#0005" stroke-width="10" d="M 510,800 510,830 M 570,870 570,900 M 430,840 430,870 M 480,920 480,950"/><circle cx="250" cy="900" r="20" fill="url(#gr09)" stroke-width="4"/><circle cx="180" cy="930" r="30" fill="url(#gr09)" stroke-width="8"/><circle cx="800" cy="900" r="30" fill="url(#gr09)" stroke-width="8"/>';
    }
    C24.onclick = ()=> {
        mouth.innerHTML = '<rect x="270" y="615" rx="40" ry="40" width="460" height="180" fill="url(#gr06)"/><path fill="url(#gr07)" d="M 300,614 Q 300,700 350,700 L 650,700 Q 700,700 700,614z M 300,795 Q 300,710 350,710 L 650,710 Q 700,710 700,795z">';
    }
    document.body.onkeydown = ()=> {
        if(this.event.key == "s" || this.event.key == "S" || this.event.key == "س"){
            box0.style.top = "50%"
            header.style.opacity = "0"
            main.style.opacity = "0"
            footer.style.opacity = "0"
        }
        if(this.event.key == "Escape"){
            box0.style.top = "-50%"
            header.style.opacity = "1"
            main.style.opacity = "1"
            footer.style.opacity = "1"
        }
    }
    save.onclick = ()=> {
        box0.style.top = "50%"
        header.style.opacity = "0"
        main.style.opacity = "0"
        footer.style.opacity = "0"
    }
    closebox.onclick = ()=> {
        box0.style.top = "-50%"
        header.style.opacity = "1"
        main.style.opacity = "1"
        footer.style.opacity = "1"
    }
    download.onclick = ()=> {
        let canvas = document.createElement('canvas');
        let svg = document.querySelector('#emoji');
        let width = document.querySelector('#width');
        let height = document.querySelector('#height');
        let base64 = btoa(svg.outerHTML);
        let w;
        let h;
        let input = document.querySelector('#file');
        if(width.value == ""){w = 500;}else{w = width.value;}
        if(height.value == ""){h = 500;}else{h = height.value;}
        svg.setAttribute('xmlns' , 'http://www.w3.org/2000/svg');
        svg.setAttribute('xmlns:xlink' , 'http://www.w3.org/1999/xlink');
        let img = document.createElement('img');
        img.src = 'data:image/svg+xml;base64,' + base64;
        img.onload = ()=> {
            canvas.setAttribute('width', w);
            canvas.setAttribute('height', h);
            let context = canvas.getContext('2d');
            context.drawImage(img,0,0,w,h);
            let dataURL = canvas.toDataURL('image/png');
            if(window.navigator.msSaveBlob){
                window.navigator.msSaveBlob(canvas.msToBlob(), "download");
                e.preventDefault();
            }else{
                let a = document.createElement('a');
                let click = new MouseEvent('click');
                a.download = "download";
                a.href = dataURL;
                a.dispatchEvent(click);
            }
        }
    }
})