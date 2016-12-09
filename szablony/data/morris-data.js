$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            Zak_w_terminie: 2666,
            Zak_tuz_po_terminie: null,
            Zak_dlugo_po_terminie: 2647
        }, {
            period: '2010 Q2',
            Zak_w_terminie: 2778,
            Zak_tuz_po_terminie: 2294,
            Zak_dlugo_po_terminie: 2441
        }, {
            period: '2010 Q3',
            Zak_w_terminie: 4912,
            Zak_tuz_po_terminie: 1969,
            Zak_dlugo_po_terminie: 2501
        }, {
            period: '2010 Q4',
            Zak_w_terminie: 3767,
            Zak_tuz_po_terminie: 3597,
            Zak_dlugo_po_terminie: 5689
        }, {
            period: '2011 Q1',
            Zak_w_terminie: 6810,
            Zak_tuz_po_terminie: 1914,
            Zak_dlugo_po_terminie: 2293
        }, {
            period: '2011 Q2',
            Zak_w_terminie: 5670,
            Zak_tuz_po_terminie: 4293,
            Zak_dlugo_po_terminie: 1881
        }, {
            period: '2011 Q3',
            Zak_w_terminie: 4820,
            Zak_tuz_po_terminie: 3795,
            Zak_dlugo_po_terminie: 1588
        }, {
            period: '2011 Q4',
            Zak_w_terminie: 15073,
            Zak_tuz_po_terminie: 5967,
            Zak_dlugo_po_terminie: 5175
        }, {
            period: '2012 Q1',
            Zak_w_terminie: 10687,
            Zak_tuz_po_terminie: 4460,
            Zak_dlugo_po_terminie: 2028
        }, {
            period: '2012 Q2',
            Zak_w_terminie: 8432,
            Zak_tuz_po_terminie: 5713,
            Zak_dlugo_po_terminie: 1791
        }],
        xkey: 'period',
        ykeys: ['Zak_w_terminie', 'Zak_tuz_po_terminie', 'Zak_dlugo_po_terminie'],
        labels: ['Zak_w_terminie', 'Zak_tuz_po_terminie', 'Zak_dlugo_po_terminie'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
