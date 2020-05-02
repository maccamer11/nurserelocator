import React from 'react';

const Table = () => {
    const avgCost = 31848

    const msCpi = 0.861
    const arkCpi = 0.869
    const okcCpi = 0.87
    const moCpi = 0.871
    const nmCpi = 0.875
    const tnCpi = 0.887
    const miCpi = 0.889
    const ksCpi = 0.890
    const georCpi = 0.892
    const alaCpi = 0.893
    const wyoCpi = 0.893
    const indCpi = 0.9
    const iowaCpi = 0.901
    const nebCpi = 0.908
    const ohCpi = 0.908
    const knCpi = 0.909
    const wvCpi = 0.911
    const txsCpi = 0.915
    const idaCpi = 0.923
    const louisCpi = 0.939
    const illCpi = 0.945
    const ncCpi = 0.949
    const scCpi = 0.959
    const azCpi = 0.970
    const wiCpi = 0.973
    const floCpi = 0.979
    const utCpi = 0.984
    const ndCpi = 0.988
    const sdCpi = 0.998
    const vrgCpi = 1.007
    const minnCpi = 1.016
    const pennsCpi = 1.017
    const colCpi = 1.056
    const montCpi = 1.069
    const delCpi = 1.081
    const nvCpi = 1.085
    const nhCpi = 1.097
    const washCpi = 1.107
    const vmCpi = 1.145
    const maineCpi = 1.175
    const riCpi = 1.194
    const njCpi = 1.251
    const cnCpi = 1.277
    const mryCpi = 1.297
    const alskCpi = 1.299
    const massCpi = 1.316
    const orgCpi = 1.342
    const nyCpi = 1.391
    const caliCpi = 1.517
    const hawCpi = 1.929



    let arkTotal = (avgCost * arkCpi).toFixed(0)
    let msTotal = (avgCost * msCpi).toFixed(0)
    let okcTotal = (avgCost * okcCpi).toFixed(0)
    let moTotal = (avgCost * moCpi).toFixed(0)
    let nmTotal = (avgCost * nmCpi).toFixed(0)
    let tnTotal = (avgCost * tnCpi).toFixed(0)
    let miTotal = (avgCost * miCpi).toFixed(0)
    let ksTotal = (avgCost * ksCpi).toFixed(0)
    let georTotal = (avgCost * georCpi).toFixed(0)
    let alaTotal = (avgCost * alaCpi).toFixed(0)
    let wyoTotal = (avgCost * wyoCpi).toFixed(0)
    let indTotal = (avgCost * indCpi).toFixed(0)
    let iowaTotal = (avgCost * iowaCpi).toFixed(0)
    let nebTotal = (avgCost * nebCpi).toFixed(0)
    let ohTotal = (avgCost * ohCpi).toFixed(0)
    let knTotal = (avgCost * knCpi).toFixed(0)
    let wvTotal = (avgCost * wvCpi).toFixed(0)
    let txsTotal = (avgCost * txsCpi).toFixed(0)
    let idaTotal = (avgCost * idaCpi).toFixed(0)
    let louisTotal = (avgCost * louisCpi).toFixed(0)
    let illTotal = (avgCost * illCpi).toFixed(0)
    let ncTotal = (avgCost * ncCpi).toFixed(0)
    let scTotal = (avgCost * scCpi).toFixed(0)
    let azTotal = (avgCost * azCpi).toFixed(0)
    let wiTotal = (avgCost * wiCpi).toFixed(0)
    let floTotal = (avgCost * floCpi).toFixed(0)
    let utTotal = (avgCost * utCpi).toFixed(0)
    let ndTotal = (avgCost * ndCpi).toFixed(0)
    let sdTotal = (avgCost * sdCpi).toFixed(0)
    let vrgTotal = (avgCost * vrgCpi).toFixed(0)
    let minnTotal = (avgCost * minnCpi).toFixed(0)
    let pennsTotal = (avgCost * pennsCpi).toFixed(0)
    let colTotal = (avgCost * colCpi).toFixed(0)
    let montTotal = (avgCost * montCpi).toFixed(0)
    let delTotal = (avgCost * delCpi).toFixed(0)
    let nvTotal = (avgCost * nvCpi).toFixed(0)
    let nhTotal = (avgCost * nhCpi).toFixed(0)
    let washTotal = (avgCost * washCpi).toFixed(0)
    let vmTotal = (avgCost * vmCpi).toFixed(0)
    let maineTotal = (avgCost * maineCpi).toFixed(0)
    let riTotal = (avgCost * riCpi).toFixed(0)
    let njTotal = (avgCost * njCpi).toFixed(0)
    let cnTotal = (avgCost * cnCpi).toFixed(0)
    let mryTotal = (avgCost * mryCpi).toFixed(0)
    let alskTotal = (avgCost * alskCpi).toFixed(0)
    let massTotal = (avgCost * massCpi).toFixed(0)
    let orgTotal = (avgCost * orgCpi).toFixed(0)
    let nyTotal = (avgCost * nyCpi).toFixed(0)
    let caliTotal = (avgCost * caliCpi).toFixed(0)
    let hawTotal = (avgCost * hawCpi).toFixed(0)



    function convertString(currency, input) {
        var thisInt = Math.round(input); //this removes numbers after decimal   
        var thisOutputValue = currency + commafy(thisInt); //add currency symbol and commas

        return thisOutputValue;
    }


    function commafy(num) {
        var str = num.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }

    const arkTotalCost = convertString('$', arkTotal) //change numbers into dollars
    const msTotalCost = convertString('$', msTotal)
    const okcTotalCost = convertString('$', okcTotal)
    const moTotalCost = convertString('$', moTotal)
    const nmTotalCost = convertString('$', nmTotal)
    const tnTotalCost = convertString('$', tnTotal)
    const miTotalCost = convertString('$', miTotal)
    const ksTotalCost = convertString('$', ksTotal)
    const georTotalCost = convertString('$', georTotal)
    const alaTotalCost = convertString('$', alaTotal)
    const wyoTotalCost = convertString('$', wyoTotal)
    const indTotalCost = convertString('$', indTotal)
    const iowaTotalCost = convertString('$', iowaTotal)
    const nebTotalCost = convertString('$', nebTotal)
    const ohTotalCost = convertString('$', ohTotal)
    const knTotalCost = convertString('$', knTotal)
    const wvTotalCost = convertString('$', wvTotal)
    const txsTotalCost = convertString('$', txsTotal)
    const idaTotalCost = convertString('$', idaTotal)
    const louisTotalCost = convertString('$', louisTotal)
    const illTotalCost = convertString('$', illTotal)
    const ncTotalCost = convertString('$', ncTotal)
    const scTotalCost = convertString('$', scTotal)
    const azTotalCost = convertString('$', azTotal)
    const wiTotalCost = convertString('$', wiTotal)
    const floTotalCost = convertString('$', floTotal)
    const utTotalCost = convertString('$', utTotal)
    const ndTotalCost = convertString('$', ndTotal)
    const sdTotalCost = convertString('$', sdTotal)
    const vrgTotalCost = convertString('$', vrgTotal)
    const minnTotalCost = convertString('$', minnTotal)
    const pennsTotalCost = convertString('$', pennsTotal)
    const colTotalCost = convertString('$', colTotal)
    const montTotalCost = convertString('$', montTotal)
    const delTotalCost = convertString('$', delTotal)
    const nvTotalCost = convertString('$', nvTotal)
    const nhTotalCost = convertString('$', nhTotal)
    const washTotalCost = convertString('$', washTotal)
    const vmTotalCost = convertString('$', vmTotal)
    const maineTotalCost = convertString('$', maineTotal)
    const riTotalCost = convertString('$', riTotal)
    const njTotalCost = convertString('$', njTotal)
    const cnTotalCost = convertString('$', cnTotal)
    const mryTotalCost = convertString('$', mryTotal)
    const alskTotalCost = convertString('$', alskTotal)
    const massTotalCost = convertString('$', massTotal)
    const orgTotalCost = convertString('$', orgTotal)
    const nyTotalCost = convertString('$', nyTotal)
    const caliTotalCost = convertString('$', caliTotal)
    const hawTotalCost = convertString('$', hawTotal)

    const alaAfterTax = 46722
    const alaIntCost = parseInt(alaTotalCost.slice(1).split(",").join(""));
    const alaSum = alaAfterTax - alaIntCost
    const alaFinalSum = commafy(alaSum)

    const alskAfterTax = 70492
    const alskIntCost = parseInt(alskTotalCost.slice(1).split(",").join(""));
    const alskSum = alskAfterTax - alskIntCost
    const alskFinalSum = commafy(alskSum)

    const azAfterTax = 59812
    const azIntCost = parseInt(azTotalCost.slice(1).split(",").join(""));
    const azSum = azAfterTax - azIntCost
    const azFinalSum = commafy(azSum)

    const arkAfterTax = 47383
    const arkIntCost = parseInt(arkTotalCost.slice(1).split(",").join(""));
    const arkSum = arkAfterTax - arkIntCost
    const arkFinalSum = commafy(arkSum)

    const caliAfterTax = 78875
    const caliIntCost = parseInt(caliTotalCost.slice(1).split(",").join(""));
    const caliSum = caliAfterTax - caliIntCost
    const caliFinalSum = commafy(caliSum)

    const colAfterTax = 57489
    const colIntCost = parseInt(colTotalCost.slice(1).split(",").join(""));
    const colSum = colAfterTax - colIntCost
    const colFinalSum = commafy(colSum)

    const cnAfterTax = 61386
    const cnIntCost = parseInt(cnTotalCost.slice(1).split(",").join(""));
    const cnSum = cnAfterTax - cnIntCost
    const cnFinalSum = commafy(cnSum)

    const delAfterTax = 55303
    const delIntCost = parseInt(delTotalCost.slice(1).split(",").join(""));
    const delSum = delAfterTax - delIntCost
    const delFinalSum = commafy(delSum)

    const floAfterTax = 54389
    const floIntCost = parseInt(floTotalCost.slice(1).split(",").join(""));
    const floSum = floAfterTax - floIntCost
    const floFinalSum = commafy(floSum)

    const georAfterTax = 52373
    const georIntCost = parseInt(georTotalCost.slice(1).split(",").join(""));
    const georSum = georAfterTax - georIntCost
    const georFinalSum = commafy(georSum)

    const hawAfterTax = 72316
    const hawIntCost = parseInt(hawTotalCost.slice(1).split(",").join(""));
    const hawSum = hawAfterTax - hawIntCost
    const hawFinalSum = commafy(hawSum)

    const idaAfterTax = 52004
    const idaIntCost = parseInt(idaTotalCost.slice(1).split(",").join(""));
    const idaSum = idaAfterTax - idaIntCost
    const idaFinalSum = commafy(idaSum)

    const illAfterTax = 55014
    const illIntCost = parseInt(illTotalCost.slice(1).split(",").join(""));
    const illSum = illAfterTax - illIntCost
    const illFinalSum = commafy(illSum)

    const iowaAfterTax = 46988
    const iowaIntCost = parseInt(iowaTotalCost.slice(1).split(",").join(""));
    const iowaSum = iowaAfterTax - iowaIntCost
    const iowaFinalSum = commafy(iowaSum)

    const indAfterTax = 50471
    const indIntCost = parseInt(indTotalCost.slice(1).split(",").join(""));
    const indSum = indAfterTax - indIntCost
    const indFinalSum = commafy(indSum)

    const ksAfterTax = 47956
    const ksIntCost = parseInt(ksTotalCost.slice(1).split(",").join(""));
    const ksSum = ksAfterTax - ksIntCost
    const ksFinalSum = commafy(ksSum)

    const knAfterTax = 48616
    const knIntCost = parseInt(knTotalCost.slice(1).split(",").join(""));
    const knSum = knAfterTax - knIntCost
    const knFinalSum = commafy(knSum)

    const louisAfterTax = 51240
    const louisIntCost = parseInt(louisTotalCost.slice(1).split(",").join(""));
    const louisSum = louisAfterTax - louisIntCost
    const louisFinalSum = commafy(louisSum)

    const maineAfterTax = 52501
    const maineIntCost = parseInt(maineTotalCost.slice(1).split(",").join(""));
    const maineSum = maineAfterTax - maineIntCost
    const maineFinalSum = commafy(maineSum)

    const mryAfterTax = 56373
    const mryIntCost = parseInt(mryTotalCost.slice(1).split(",").join(""));
    const mrySum = mryAfterTax - mryIntCost
    const mryFinalSum = commafy(mrySum)

    const massAfterTax = 67881
    const massIntCost = parseInt(massTotalCost.slice(1).split(",").join(""));
    const massSum = massAfterTax - massIntCost
    const massFinalSum = commafy(massSum)

    const miAfterTax = 55398
    const miIntCost = parseInt(miTotalCost.slice(1).split(",").join(""));
    const miSum = miAfterTax - miIntCost
    const miFinalSum = commafy(miSum)

    const minnAfterTax = 58962
    const minnIntCost = parseInt(minnTotalCost.slice(1).split(",").join(""));
    const minnSum = minnAfterTax - minnIntCost
    const minnFinalSum = commafy(minnSum)

    const msAfterTax = 46467
    const msIntCost = parseInt(msTotalCost.slice(1).split(",").join(""));
    const msSum = msAfterTax - msIntCost
    const msFinalSum = commafy(msSum)

    const moAfterTax = 49609
    const moIntCost = parseInt(moTotalCost.slice(1).split(",").join(""));
    const moSum = moAfterTax - moIntCost
    const moFinalSum = commafy(moSum)

    const montAfterTax = 52210
    const montIntCost = parseInt(montTotalCost.slice(1).split(",").join(""));
    const montSum = montAfterTax - montIntCost
    const montFinalSum = commafy(montSum)

    const nebAfterTax = 50524
    const nebIntCost = parseInt(nebTotalCost.slice(1).split(",").join(""));
    const nebSum = nebAfterTax - nebIntCost
    const nebFinalSum = commafy(nebSum)

    const nvAfterTax = 69001
    const nvIntCost = parseInt(nvTotalCost.slice(1).split(",").join(""));
    const nvSum = nvAfterTax - nvIntCost
    const nvFinalSum = commafy(nvSum)

    const nhAfterTax = 58800
    const nhIntCost = parseInt(nhTotalCost.slice(1).split(",").join(""));
    const nhSum = nhAfterTax - nhIntCost
    const nhFinalSum = commafy(nhSum)

    const njAfterTax = 62938
    const njIntCost = parseInt(njTotalCost.slice(1).split(",").join(""));
    const njSum = njAfterTax - njIntCost
    const njFinalSum = commafy(njSum)

    const nmAfterTax = 55678
    const nmIntCost = parseInt(nmTotalCost.slice(1).split(",").join(""));
    const nmSum = nmAfterTax - nmIntCost
    const nmFinalSum = commafy(nmSum)

    const nyAfterTax = 60980
    const nyIntCost = parseInt(nyTotalCost.slice(1).split(",").join(""));
    const nySum = nyAfterTax - nyIntCost
    const nyFinalSum = commafy(nySum)

    const ncAfterTax = 50603
    const ncIntCost = parseInt(ncTotalCost.slice(1).split(",").join(""));
    const ncSum = ncAfterTax - ncIntCost
    const ncFinalSum = commafy(ncSum)

    const ndAfterTax = 52728
    const ndIntCost = parseInt(ndTotalCost.slice(1).split(",").join(""));
    const ndSum = ndAfterTax - ndIntCost
    const ndFinalSum = commafy(ndSum)

    const ohAfterTax = 51663
    const ohIntCost = parseInt(ohTotalCost.slice(1).split(",").join(""));
    const ohSum = ohAfterTax - ohIntCost
    const ohFinalSum = commafy(ohSum)

    const okcAfterTax = 49728
    const okcIntCost = parseInt(okcTotalCost.slice(1).split(",").join(""));
    const okcSum = okcAfterTax - okcIntCost
    const okcFinalSum = commafy(okcSum)

    const orgAfterTax = 64927
    const orgIntCost = parseInt(orgTotalCost.slice(1).split(",").join(""));
    const orgSum = orgAfterTax - orgIntCost
    const orgFinalSum = commafy(orgSum)

    const pennsAfterTax = 54156
    const pennsIntCost = parseInt(pennsTotalCost.slice(1).split(",").join(""));
    const pennsSum = pennsAfterTax - pennsIntCost
    const pennsFinalSum = commafy(pennsSum)

    const riAfterTax = 62072
    const riIntCost = parseInt(riTotalCost.slice(1).split(",").join(""));
    const riSum = riAfterTax - riIntCost
    const riFinalSum = commafy(riSum)

    const scAfterTax = 49271
    const scIntCost = parseInt(scTotalCost.slice(1).split(",").join(""));
    const scSum = scAfterTax - scIntCost
    const scFinalSum = commafy(scSum)

    const sdAfterTax = 48712
    const sdIntCost = parseInt(sdTotalCost.slice(1).split(",").join(""));
    const sdSum = sdAfterTax - sdIntCost
    const sdFinalSum = commafy(sdSum)

    const tnAfterTax = 50843
    const tnIntCost = parseInt(tnTotalCost.slice(1).split(",").join(""));
    const tnSum = tnAfterTax - tnIntCost
    const tnFinalSum = commafy(tnSum)

    const txsAfterTax = 59264
    const txsIntCost = parseInt(txsTotalCost.slice(1).split(",").join(""));
    const txsSum = txsAfterTax - txsIntCost
    const txsFinalSum = commafy(txsSum)

    const utAfterTax = 51278
    const utIntCost = parseInt(utTotalCost.slice(1).split(",").join(""));
    const utSum = utAfterTax - utIntCost
    const utFinalSum = commafy(utSum)

    const vmAfterTax = 53574
    const vmIntCost = parseInt(vmTotalCost.slice(1).split(",").join(""));
    const vmSum = vmAfterTax - vmIntCost
    const vmFinalSum = commafy(vmSum)

    const vrgAfterTax = 53823
    const vrgIntCost = parseInt(vrgTotalCost.slice(1).split(",").join(""));
    const vrgSum = vrgAfterTax - vrgIntCost
    const vrgFinalSum = commafy(vrgSum)

    const washAfterTax = 67446
    const washIntCost = parseInt(washTotalCost.slice(1).split(",").join(""));
    const washSum = washAfterTax - washIntCost
    const washFinalSum = commafy(washSum)

    const wvAfterTax = 48446
    const wvIntCost = parseInt(wvTotalCost.slice(1).split(",").join(""));
    const wvSum = wvAfterTax - wvIntCost
    const wvFinalSum = commafy(wvSum)

    const wiAfterTax = 54043
    const wiIntCost = parseInt(wiTotalCost.slice(1).split(",").join(""));
    const wiSum = wiAfterTax - wiIntCost
    const wiFinalSum = commafy(wiSum)

    const wyoAfterTax = 55149
    const wyoIntCost = parseInt(wyoTotalCost.slice(1).split(",").join(""));
    const wyoSum = wyoAfterTax - wyoIntCost
    const wyoFinalSum = commafy(wyoSum)



    return (
        <div className='container'>
            <div>
                <table class="table table-hover">
                    <thead>
                        <tr className="the-font">
                            <th scope="col">State</th>
                            <th scope="col" className='text-primary'>Yearly Wage</th>
                            <th scope="col" className='text-warning'>$ After Income Tax</th>
                            <th scope="col" className='text-danger'>Cost Of Living</th>
                            {/* <th scope="col">Jobs Surplus</th> */}
                            <th scope="col" className='text-success'>Disposable Income</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Alabama</th>
                            <td>$60,230</td>
                            <td>$46,722</td>
                            <td>{alaTotalCost}</td>
                            <td>${alaFinalSum}</td>

                        </tr>
                        <tr>
                            <th scope="row">Alaska</th>
                            <td>$90,500</td>
                            <td>$70,492</td>
                            <td>{alskTotalCost}</td>
                            <td>${alskFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Arizona</th>
                            <td>$78,330</td>
                            <td>$59,812</td>
                            <td>{azTotalCost}</td>
                            <td>${azFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Arkansas</th>
                            <td>$61,330</td>
                            <td>$47,383</td>
                            <td>{arkTotalCost}</td>
                            <td>${arkFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">California</th>
                            <td>$113,240</td>
                            <td>$78,875</td>
                            <td>{caliTotalCost}</td>
                            <td>${caliFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Colorado</th>
                            <td>$76,230</td>
                            <td>$57,489</td>
                            <td>{colTotalCost}</td>
                            <td>${colFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Connecticut</th>
                            <td>$83,440</td>
                            <td>$61,386</td>
                            <td>{cnTotalCost}</td>
                            <td>${cnFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Delaware</th>
                            <td>$74,100</td>
                            <td>$55,303</td>
                            <td>{delTotalCost}</td>
                            <td>${delFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Florida</th>
                            <td>$67,610</td>
                            <td>$54,389</td>
                            <td>{floTotalCost}</td>
                            <td>${floFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Georgia</th>
                            <td>$69,590</td>
                            <td>$52,373</td>
                            <td>{georTotalCost}</td>
                            <td>${georFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Hawaii</th>
                            <td>$104,060</td>
                            <td>$72,316</td>
                            <td>{hawTotalCost}</td>
                            <td>${hawFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Idaho</th>
                            <td>$69,480</td>
                            <td>$52,004</td>
                            <td>{idaTotalCost}</td>
                            <td>${idaFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Illinois</th>
                            <td>$73,510</td>
                            <td>$55,014</td>
                            <td>{illTotalCost}</td>
                            <td>${illFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Indiana</th>
                            <td>$66,560</td>
                            <td>$50,471</td>
                            <td>{indTotalCost}</td>
                            <td>${indFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Iowa</th>
                            <td>$60,590</td>
                            <td>$46,988</td>
                            <td>{iowaTotalCost}</td>
                            <td>${iowaFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Kansas</th>
                            <td>$62,450</td>
                            <td>$47,956</td>
                            <td>{ksTotalCost}</td>
                            <td>${ksFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Kentucky</th>
                            <td>$63,750</td>
                            <td>$48,616</td>
                            <td>{knTotalCost}</td>
                            <td>${knFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Louisiana</th>
                            <td>$65,850</td>
                            <td>$51,240</td>
                            <td>{louisTotalCost}</td>
                            <td>${louisFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Maine</th>
                            <td>$69,760</td>
                            <td>$52,501</td>
                            <td>{maineTotalCost}</td>
                            <td>${maineFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Maryland</th>
                            <td>$77,910</td>
                            <td>$56,373</td>
                            <td>{mryTotalCost}</td>
                            <td>${mryFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Massachusetts</th>
                            <td>$93,160</td>
                            <td>$67,881</td>
                            <td>{massTotalCost}</td>
                            <td>${massFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Michigan</th>
                            <td>$73,200</td>
                            <td>$55,398</td>
                            <td>{miTotalCost}</td>
                            <td>${miFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Minnesota</th>
                            <td>$80,130</td>
                            <td>$58,962</td>
                            <td>{minnTotalCost}</td>
                            <td>${minnFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Mississippi</th>
                            <td>$59,750</td>
                            <td>$46,467</td>
                            <td>{msTotalCost}</td>
                            <td>${msFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Missouri</th>
                            <td>$64,160</td>
                            <td>$49,609</td>
                            <td>{moTotalCost}</td>
                            <td>${moFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Montana</th>
                            <td>$69,340</td>
                            <td>$52,210</td>
                            <td>{montTotalCost}</td>
                            <td>${montFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Nebraska</th>
                            <td>$66,640</td>
                            <td>$50,524</td>
                            <td>{nebTotalCost}</td>
                            <td>${nebFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Nevada</th>
                            <td>$88,380</td>
                            <td>$69,001</td>
                            <td>{nvTotalCost}</td>
                            <td>${nvFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">New Hampshire</th>
                            <td>$73,880</td>
                            <td>$58,800</td>
                            <td>{nhTotalCost}</td>
                            <td>${nhFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">New Jersey</th>
                            <td>$84,280</td>
                            <td>$62,938</td>
                            <td>{njTotalCost}</td>
                            <td>${njFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">New Mexico</th>
                            <td>$73,300</td>
                            <td>$55,678</td>
                            <td>{nmTotalCost}</td>
                            <td>${nmFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">New York</th>
                            <td>$87,840</td>
                            <td>$60,980</td>
                            <td>{nyTotalCost}</td>
                            <td>${nyFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">North Carolina</th>
                            <td>$66,440</td>
                            <td>$50,603</td>
                            <td>{ncTotalCost}</td>
                            <td>${ncFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">North Dakota</th>
                            <td>$66,290</td>
                            <td>$52,728</td>
                            <td>{ndTotalCost}</td>
                            <td>${ndFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Ohio</th>
                            <td>$68,220</td>
                            <td>$51,663</td>
                            <td>{ohTotalCost}</td>
                            <td>${ohFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Oklahoma</th>
                            <td>$64,800</td>
                            <td>$49,728</td>
                            <td>{okcTotalCost}</td>
                            <td>${okcFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Oregon</th>
                            <td>$92,960</td>
                            <td>$64,927</td>
                            <td>{orgTotalCost}</td>
                            <td>${orgFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Pennsylvania</th>
                            <td>$71,410</td>
                            <td>$54,156</td>
                            <td>{pennsTotalCost}</td>
                            <td>${pennsFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Rhode Island</th>
                            <td>$82,310</td>
                            <td>$62,072</td>
                            <td>{riTotalCost}</td>
                            <td>${riFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">South Carolina</th>
                            <td>$64,840</td>
                            <td>$49,271</td>
                            <td>{scTotalCost}</td>
                            <td>${scFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">South Dakota</th>
                            <td>$59,540</td>
                            <td>$48,712</td>
                            <td>{sdTotalCost}</td>
                            <td>${sdFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Tennessee</th>
                            <td>$62,570</td>
                            <td>$50,843</td>
                            <td>{tnTotalCost}</td>
                            <td>${tnFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Texas</th>
                            <td>$74,540</td>
                            <td>$59,264</td>
                            <td>{txsTotalCost}</td>
                            <td>${txsFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Utah</th>
                            <td>$67,970</td>
                            <td>$51,278</td>
                            <td>{utTotalCost}</td>
                            <td>${utFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Vermont</th>
                            <td>$70,240</td>
                            <td>$53,574</td>
                            <td>{vmTotalCost}</td>
                            <td>${vmFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Virginia</th>
                            <td>$71,870</td>
                            <td>$53,823</td>
                            <td>{vrgTotalCost}</td>
                            <td>${vrgFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Washington</th>
                            <td>$86,170</td>
                            <td>$67,446</td>
                            <td>{washTotalCost}</td>
                            <td>${washFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">West Virginia</th>
                            <td>$63,220</td>
                            <td>$48,446</td>
                            <td>{wvTotalCost}</td>
                            <td>${wvFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Wisconsin</th>
                            <td>$72,610</td>
                            <td>$54,043</td>
                            <td>{wiTotalCost}</td>
                            <td>${wiFinalSum}</td>
                        </tr>
                        <tr>
                            <th scope="row">Wyoming</th>
                            <td>$68,690</td>
                            <td>$55,149</td>
                            <td>{wyoTotalCost}</td>
                            <td>${wyoFinalSum}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;