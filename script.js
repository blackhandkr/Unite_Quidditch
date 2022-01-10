/* 주요 데이터 변수 선언 및 초기값 할당 */

const killpenalty = 100; // 킬 페널티
const goldbonus = 500 + killpenalty ;// 백솜모카 처치 보너스. 1킬로 인한 페널티 연산을 무효화하기 위해 killpenalty값을 더함

let T1Speed = 1; // 1팀의 수색꾼 코드
let T1Power = 2; // 1팀의 몰이꾼 코드
let T2Speed = 6; // 2팀의 수색꾼 코드
let T2Power = 7; // 2팀의 몰이꾼 코드

let goldcheck = [0,0]; // 백솜모카 처치 카운트


/* 입력 과정에서의 오류 발생 예방 */

// 백솜모카 처치 체크박스를 눌렀을 때, TRUE일 경우 이웃한 체크박스를 FALSE로 변경
function PreventDoubleCheck1(event) {
    if(event.target.checked)
        {goldcheck[0] = 1;}
        else {goldcheck[0] = 0;}
    if(document.getElementById('T2Gold').checked = true)
        {document.getElementById('T2Gold').checked = false;
        goldcheck[1] = 0;}  
}
function PreventDoubleCheck2(event) {
    if(event.target.checked)
        {goldcheck[1] = 1;}
        else {goldcheck[1] = 0;}
    if(document.getElementById('T1Gold').checked = true)
        {document.getElementById('T1Gold').checked = false;
        goldcheck[0] = 0;}  
}

// 수색꾼 라디오버튼을 눌렀을 때, 이웃한 몰이꾼 라디오버튼을 해제 및 비활성화
function DisablePower1(event) {
    if(event.target.checked) {
        document.getElementById('P1Plus').checked = false;
        document.getElementById('P1Plus').disabled = true;
        document.getElementById('P2Plus').disabled = false;
        document.getElementById('P3Plus').disabled = false;
        document.getElementById('P4Plus').disabled = false;
        document.getElementById('P5Plus').disabled = false;
        T1Speed = 1;
    }
}
function DisablePower2(event) {
    if(event.target.checked) {
        document.getElementById('P2Plus').checked = false;
        document.getElementById('P2Plus').disabled = true;
        document.getElementById('P1Plus').disabled = false;
        document.getElementById('P3Plus').disabled = false;
        document.getElementById('P4Plus').disabled = false;
        document.getElementById('P5Plus').disabled = false;
        T1Speed = 2;
    }
}
function DisablePower3(event) {
    if(event.target.checked) {
        document.getElementById('P3Plus').checked = false;
        document.getElementById('P3Plus').disabled = true;
        document.getElementById('P1Plus').disabled = false;
        document.getElementById('P2Plus').disabled = false;
        document.getElementById('P4Plus').disabled = false;
        document.getElementById('P5Plus').disabled = false;
        T1Speed = 3;
    }
}
function DisablePower4(event) {
    if(event.target.checked) {
        document.getElementById('P4Plus').checked = false;
        document.getElementById('P4Plus').disabled = true;
        document.getElementById('P1Plus').disabled = false;
        document.getElementById('P2Plus').disabled = false;
        document.getElementById('P3Plus').disabled = false;
        document.getElementById('P5Plus').disabled = false;
        T1Speed = 4;
    }
}
function DisablePower5(event) {
    if(event.target.checked) {
        document.getElementById('P5Plus').checked = false;
        document.getElementById('P5Plus').disabled = true;
        document.getElementById('P1Plus').disabled = false;
        document.getElementById('P2Plus').disabled = false;
        document.getElementById('P3Plus').disabled = false;
        document.getElementById('P4Plus').disabled = false;
        T1Speed = 5;
    }
}
function DisablePower6(event) {
    if(event.target.checked) {
        document.getElementById('P6Plus').checked = false;
        document.getElementById('P6Plus').disabled = true;
        document.getElementById('P7Plus').disabled = false;
        document.getElementById('P8Plus').disabled = false;
        document.getElementById('P9Plus').disabled = false;
        document.getElementById('P10Plus').disabled = false;
        T2Speed = 6;
    }
}
function DisablePower7(event) {
    if(event.target.checked) {
        document.getElementById('P7Plus').checked = false;
        document.getElementById('P7Plus').disabled = true;
        document.getElementById('P6Plus').disabled = false;
        document.getElementById('P8Plus').disabled = false;
        document.getElementById('P9Plus').disabled = false;
        document.getElementById('P10Plus').disabled = false;
        T2Speed = 7;
    }
}
function DisablePower8(event) {
    if(event.target.checked) {
        document.getElementById('P8Plus').checked = false;
        document.getElementById('P8Plus').disabled = true;
        document.getElementById('P6Plus').disabled = false;
        document.getElementById('P7Plus').disabled = false;
        document.getElementById('P9Plus').disabled = false;
        document.getElementById('P10Plus').disabled = false;
        T2Speed = 8;
    }
}
function DisablePower9(event) {
    if(event.target.checked) {
        document.getElementById('P9Plus').checked = false;
        document.getElementById('P9Plus').disabled = true;
        document.getElementById('P6Plus').disabled = false;
        document.getElementById('P7Plus').disabled = false;
        document.getElementById('P8Plus').disabled = false;
        document.getElementById('P10Plus').disabled = false;
        T2Speed = 9;
    }
}
function DisablePower10(event) {
    if(event.target.checked) {
        document.getElementById('P10Plus').checked = false;
        document.getElementById('P10Plus').disabled = true;
        document.getElementById('P6Plus').disabled = false;
        document.getElementById('P7Plus').disabled = false;
        document.getElementById('P8Plus').disabled = false;
        document.getElementById('P9Plus').disabled = false;
        T2Speed = 10;
    }
}


// 몰이꾼 라디오버튼을 눌렀을 때, 이웃한 수색꾼 라디오버튼을 해제 및 비활성화
function DisableSpeed1(event) {
    if(event.target.checked) {
        document.getElementById('P1Spd').checked = false;
        document.getElementById('P1Spd').disabled = true;
        document.getElementById('P2Spd').disabled = false;
        document.getElementById('P3Spd').disabled = false;
        document.getElementById('P4Spd').disabled = false;
        document.getElementById('P5Spd').disabled = false;
        T1Power = 1;
    }
}
function DisableSpeed2(event) {
    if(event.target.checked) {
        document.getElementById('P2Spd').checked = false;
        document.getElementById('P2Spd').disabled = true;
        document.getElementById('P1Spd').disabled = false;
        document.getElementById('P3Spd').disabled = false;
        document.getElementById('P4Spd').disabled = false;
        document.getElementById('P5Spd').disabled = false;
        T1Power = 2;
    }
}
function DisableSpeed3(event) {
    if(event.target.checked) {
        document.getElementById('P3Spd').checked = false;
        document.getElementById('P3Spd').disabled = true;
        document.getElementById('P1Spd').disabled = false;
        document.getElementById('P2Spd').disabled = false;
        document.getElementById('P4Spd').disabled = false;
        document.getElementById('P5Spd').disabled = false;
        T1Power = 3;
    }
}
function DisableSpeed4(event) {
    if(event.target.checked) {
        document.getElementById('P4Spd').checked = false;
        document.getElementById('P4Spd').disabled = true;
        document.getElementById('P1Spd').disabled = false;
        document.getElementById('P2Spd').disabled = false;
        document.getElementById('P3Spd').disabled = false;
        document.getElementById('P5Spd').disabled = false;
        T1Power = 4;
    }
}
function DisableSpeed5(event) {
    if(event.target.checked) {
        document.getElementById('P5Spd').checked = false;
        document.getElementById('P5Spd').disabled = true;
        document.getElementById('P1Spd').disabled = false;
        document.getElementById('P2Spd').disabled = false;
        document.getElementById('P3Spd').disabled = false;
        document.getElementById('P4Spd').disabled = false;
        T1Power = 5;
    }
}
function DisableSpeed6(event) {
    if(event.target.checked) {
        document.getElementById('P6Spd').checked = false;
        document.getElementById('P6Spd').disabled = true;
        document.getElementById('P7Spd').disabled = false;
        document.getElementById('P8Spd').disabled = false;
        document.getElementById('P9Spd').disabled = false;
        document.getElementById('P10Spd').disabled = false;
        T2Power = 6;
    }
}
function DisableSpeed7(event) {
    if(event.target.checked) {
        document.getElementById('P7Spd').checked = false;
        document.getElementById('P7Spd').disabled = true;
        document.getElementById('P6Spd').disabled = false;
        document.getElementById('P8Spd').disabled = false;
        document.getElementById('P9Spd').disabled = false;
        document.getElementById('P10Spd').disabled = false;
        T2Power = 7;
    }
}
function DisableSpeed8(event) {
    if(event.target.checked) {
        document.getElementById('P8Spd').checked = false;
        document.getElementById('P8Spd').disabled = true;
        document.getElementById('P6Spd').disabled = false;
        document.getElementById('P7Spd').disabled = false;
        document.getElementById('P9Spd').disabled = false;
        document.getElementById('P10Spd').disabled = false;
        T2Power = 8;
    }
}
function DisableSpeed9(event) {
    if(event.target.checked) {
        document.getElementById('P9Spd').checked = false;
        document.getElementById('P9Spd').disabled = true;
        document.getElementById('P6Spd').disabled = false;
        document.getElementById('P7Spd').disabled = false;
        document.getElementById('P8Spd').disabled = false;
        document.getElementById('P10Spd').disabled = false;
        T2Power = 9;
    }
}
function DisableSpeed10(event) {
    if(event.target.checked) {
        document.getElementById('P10Spd').checked = false;
        document.getElementById('P10Spd').disabled = true;
        document.getElementById('P6Spd').disabled = false;
        document.getElementById('P7Spd').disabled = false;
        document.getElementById('P8Spd').disabled = false;
        document.getElementById('P9Spd').disabled = false;
        T2Power = 10;
    }
}

/* '계산하기' 버튼을 눌렀을 때의 동작 */

function Calculate() {

/* 계산에 필요한 변수들을 설정 */

Scorearray = [document.getElementById('P1Score').value*1, 
document.getElementById('P2Score').value*1, 
document.getElementById('P3Score').value*1, 
document.getElementById('P4Score').value*1, 
document.getElementById('P5Score').value*1, 
document.getElementById('P6Score').value*1, 
document.getElementById('P7Score').value*1, 
document.getElementById('P8Score').value*1, 
document.getElementById('P9Score').value*1, 
document.getElementById('P10Score').value*1];

Killarray = [document.getElementById('P1Kill').value*1, 
document.getElementById('P2Kill').value*1, 
document.getElementById('P3Kill').value*1, 
document.getElementById('P4Kill').value*1, 
document.getElementById('P5Kill').value*1, 
document.getElementById('P6Kill').value*1, 
document.getElementById('P7Kill').value*1, 
document.getElementById('P8Kill').value*1, 
document.getElementById('P9Kill').value*1, 
document.getElementById('P10Kill').value*1];

Speedarray = [T1Speed, T2Speed];
Powerarray = [T1Power, T2Power];

Finalarray = [document.getElementById('T1baseScore').value*1, document.getElementById('T2baseScore').value*1];

Adjust = [0,0,0,0,0,0,0,0,0,0]

/* P1부터 P10까지 루프하며 보정치 계산 */

for (i = 0; i<10;) {
    if(i<5) {t=0} else {t=1} ;// 팀 판별
    if((i+1) == Speedarray[t]) { // 수색꾼일 때
        Adjust[i] = -Killarray[i]*killpenalty; // 1킬당 페널티만큼 감점
        if(goldcheck[t] == 1) { // 백솜모카 처치에 체크되어 있으면
            Adjust[i] = Adjust[i] + goldbonus;  // 보너스 점수만큼 더하기
        }
    }
    else if ((i+1) == Powerarray[t]) { // 몰이꾼일 때
        Adjust[i] = 0; // 보정값 없음
    }
    else { // 모두 아닐 때 (추격꾼일 때)
        Adjust[i] = (-Killarray[i]*killpenalty + Scorearray[i])*1; // 1킬당 페널티만큼 감점 후 개인 득점만큼 더하기
    }

    Finalarray[t] = Finalarray[t] + Adjust[i]; // 팀 득점에 보정값 더하기

    i++
}

/* 개인별 보정치 및 최종 점수 출력 */

document.getElementById('P1Adjust').innerHTML = Adjust[0];
document.getElementById('P2Adjust').innerHTML = Adjust[1];
document.getElementById('P3Adjust').innerHTML = Adjust[2];
document.getElementById('P4Adjust').innerHTML = Adjust[3];
document.getElementById('P5Adjust').innerHTML = Adjust[4];
document.getElementById('P6Adjust').innerHTML = Adjust[5];
document.getElementById('P7Adjust').innerHTML = Adjust[6];
document.getElementById('P8Adjust').innerHTML = Adjust[7];
document.getElementById('P9Adjust').innerHTML = Adjust[8];
document.getElementById('P10Adjust').innerHTML = Adjust[9];

document.getElementById('T1FinalScore').innerHTML = Finalarray[0];
document.getElementById('T2FinalScore').innerHTML = Finalarray[1];

// 승리팀 점수 셀 강조
// 승리패배 아이콘 출력

if(Finalarray[0] > Finalarray[1]) {
    document.getElementById('T1img').setAttribute('src', 'images/t_settlement_win.png');
    document.getElementById('T1Final').style.backgroundColor = '#ffaaaa'
    document.getElementById('T2img').setAttribute('src', 'images/t_settlement_lose.png')
}
else if (Finalarray[1] > Finalarray[0]) {
    document.getElementById('T1img').setAttribute('src', 'images/t_settlement_lose.png');
    document.getElementById('T2img').setAttribute('src', 'images/t_settlement_win.png')
    document.getElementById('T2Final').style.backgroundColor = '#ffaaaa'
}
    else {}

}


/* '초기화' 버튼을 눌렀을 때의 동작 */

function resetFnc() {
    document.getElementById('T1img').setAttribute('src', '');
    document.getElementById('T2img').setAttribute('src', '')

    document.getElementById('P1Adjust').innerHTML = '&nbsp;';
    document.getElementById('P2Adjust').innerHTML = '&nbsp;';
    document.getElementById('P3Adjust').innerHTML = '&nbsp;';
    document.getElementById('P4Adjust').innerHTML = '&nbsp;';
    document.getElementById('P5Adjust').innerHTML = '&nbsp;';
    document.getElementById('P6Adjust').innerHTML = '&nbsp;';
    document.getElementById('P7Adjust').innerHTML = '&nbsp;';
    document.getElementById('P8Adjust').innerHTML = '&nbsp;';
    document.getElementById('P9Adjust').innerHTML = '&nbsp;';
    document.getElementById('P10Adjust').innerHTML = '&nbsp;';

    document.getElementById('T1FinalScore').innerHTML = '&nbsp;';
    document.getElementById('T2FinalScore').innerHTML = '&nbsp;';

    document.getElementById('T1Final').style.backgroundColor = ''
    document.getElementById('T2Final').style.backgroundColor = ''
    
    goldcheck = [0,0];
}
