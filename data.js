
	var planes = [
		["Union Road Car Park | Size: 243 spaces | Price : Free",56.01834893048151,-3.725078701972962],
		["Register Street Car Park | Size: 70 spaces | Price : Free",56.01800112378448,-3.6062836647033696],
		["Baird Street Car Park | Size: 22 spaces | Price : Free",56.00309046455068,-3.814428448677063],
		["Davies Row Car Park | Size: 57 spaces | Price : Free",56.023808485428134,-3.9096790552139287],
		["Drossie Road Car Park | Size: 67 spaces | Price : Free",55.9926237757714,-3.794816136360169],
		["Foundry Loan East Car Park | Size: 236 spaces | Price : Free",56.02331382938375,-3.8310849666595463],
		["Hillfoots Road Car Park | Size: N/A spaces | Price : Free",56.16767549537494,-3.6687791347503667],
		["Hillfoots Road Car Park | Size: N/A spaces | Price : Free",56.16767549537494,-3.6687791347503667],
		["Bo'ness Car Park | Size: 78 spaces | Price : Free",56.018663752808166,-3.606964945793152],
		["Denny Car Park | Size: 13 spaces | Price : Free",56.01838191198844,-3.9065891504287724],
		["Polmont Car Park | Size: 70 spaces | Price : Free",55.985200278814474,-3.716012835502625],
		["Duke Street West Car Park | Size: 15 spaces | Price : Free",53.00196594,-1.197026092],
		["Duke Street East Car Park | Size: 55 spaces | Price : Free",53.00227248826912,-1.196790933609009],
		["Holborn Place Car Park | Size: 45 spaces | Price : Free",53.00158748,-1.195408218],
		["Denman Street Car Park | Size: 40 spaces | Price : Free",52.95755265,-1.175167826],
		["Spondon Street | Size: 56 spaces | Price : Free",52.97987269,-1.146532953],
		["Gilead Street | Size: 45 spaces | Price : Free",53.00110064,-1.198456545],
		["Moor Bridge Park & Ride | Size: 119 spaces | Price : Free",53.01434573,-1.187462109],
		["Belper Road | Size: 21 spaces | Price : Free",52.964088,-1.169135],
		
		["Forest Park & Ride | Size: 982 spaces | Price : Free",52.96518158,-1.164717507],
		["Bulwell Station | Size: 72 spaces | Price : Free",52.99950629,-1.195850466],
		["Queens Drive Park & Ride | Size: 1066 spaces | Price : Free",52.92871822,-1.164183076],
		["Caulton Street | Size: 17 spaces | Price : Free",52.96263189,-1.16960048],
		["Winchester Street | Size: 58 spaces | Price : Free",52.9820466,-1.144645033],
		["Garfield Road | Size: 21 spaces | Price : Free",52.96012804,-1.175609333],
		["Racecourse Park & Ride | Size: 470 spaces | Price : Free",52.94920294,-1.114290515],
		["Wilkinson Street Park & Ride | Size: 600 spaces | Price : Free",52.97272765,-1.178095145],
		["Randal Street | Size: 17 spaces | Price : Free",52.96759852,-1.172695178],
		["Hall Street | Size: 29 spaces | Price : Free",52.98334076,-1.144115628],
		["Phoenix Park & Ride | Size: 657 spaces | Price : Free",52.98904656,-1.208008404],
		["Glenartney Road Car Park | Size: 28 spaces | Price : Free",56.24459589020961,-4.212580919265748],
		["Castlehill Car Park | Size: 34 spaces | Price : Free",56.1889469711754,-4.052056074142457],
		["Inversnaid Car Park | Size: 40 spaces | Price : Free",56.24319193986099,-4.685143232345582],
		["Bridge of Allan Railway Station Car Park | Size: 114 spaces | Price : Free",56.156401972310185,-3.956966400146485],
		["Bannockburn Car Park | Size: 24 spaces | Price : Free",56.0896909273933,-3.9116263389587407],
		["Dunblane Milrow Car Park | Size: 61 spaces | Price : Free",56.18748426285602,-3.9651364088058476],
        ["Balmaha Car Park | Size: 200 spaces | Price : Free",56.085473870941144,-4.5395368337631234]
		
		
		
		
	
		
		
		
		
		
		
		
		
		
		];

        var map = L.map('map').setView([56.03292401161669, -3.7985229492187504], 10);
        mapLink = 
            '<a href="https://openstreetmap.org">OpenStreetMap</a>';
            data = 
            '<a href="https://openstreetmap.org">here</a>';
        L.tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + mapLink + ' Contributors | Car park data gathered under multiple sources, click ' + data + ' to find out more | Free My Parking - Web Version',
            maxZoom: 18,
            }).addTo(map);

		for (var i = 0; i < planes.length; i++) {
			marker = new L.marker([planes[i][1],planes[i][2]])
				.bindPopup(planes[i][0])
				.addTo(map);
				
	
		}
