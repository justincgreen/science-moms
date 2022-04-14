btnDiscover.addEventListener('click', () => {
	// Org output variables
	const orgOneTitle = document.querySelector('.org-one-title');
	const orgOneDescription = document.querySelector('.org-one-description');
	const orgOneLink = document.querySelector('.org-one-link');
	const orgOneLinkText = document.querySelector('.org-one-link-text');
	
	const orgTwoTitle = document.querySelector('.org-two-title');
	const orgTwoDescription = document.querySelector('.org-two-description');
	const orgTwoLink = document.querySelector('.org-two-link');
	const orgTwoLinkText = document.querySelector('.org-two-link-text');
	
	const orgThreeTitle = document.querySelector('.org-three-title');
	const orgThreeDescription = document.querySelector('.org-three-description');
	const orgThreeLink = document.querySelector('.org-three-link');
	const orgThreeLinkText = document.querySelector('.org-three-link-text');
	
	const orgFourTitle = document.querySelector('.org-four-title');
	const orgFourDescription = document.querySelector('.org-four-description');
	const orgFourLink = document.querySelector('.org-four-link');
	const orgFourLinkText = document.querySelector('.org-four-link-text');
	
	const orgFiveTitle = document.querySelector('.org-five-title');
	const orgFiveDescription = document.querySelector('.org-five-description');
	const orgFiveLink = document.querySelector('.org-five-link');
	const orgFiveLinkText = document.querySelector('.org-five-link-text');
	
	// Display org results
	quizSection.scrollIntoView({behavior: "smooth", block: "start"});
	quizSection.style.backgroundColor = '#fcd8bb';
	ctaCaptureSection.classList.add('hidden');
	thanksMessage.classList.remove('hidden');
	orgs.classList.remove('hidden');
	takeActionMessage.classList.remove('hidden');
	
	// Output org results for states that have no state option (Results are pulled from the general object)
	// Display Org One - related to ideology
	if(result.state === 'none' && result.ideology === 'conservative') {			
		// Pull data from general object
		orgOneTitle.innerHTML = general.ideology.conservativeGroupTitle;
		orgOneDescription.innerHTML = general.ideology.conservativeGroupDescription;
		orgOneLinkText.innerHTML = general.ideology.conservativeGroupTitle;
		orgOneLink.href = general.ideology.conservativeGroupLink;
		
		orgTwoTitle.innerHTML = general.faith.faithGroupOneTitle;
		orgTwoDescription.innerHTML = general.faith.faithGroupOneDescription;
		orgTwoLinkText.innerHTML = general.faith.faithGroupOneTitle;
		orgTwoLink.href = general.faith.faithGroupOneLink;
		
		orgThreeTitle.innerHTML = general.faith.faithGroupTwoTitle;
		orgThreeDescription.innerHTML = general.faith.faithGroupTwoDescription;
		orgThreeLinkText.innerHTML = general.faith.faithGroupTwoTitle;
		orgThreeLink.href = general.faith.faithGroupTwoLink;
		
		orgFourTitle.innerHTML = general.faith.faithGroupThreeTitle;
		orgFourDescription.innerHTML = general.faith.faithGroupThreeDescription;
		orgFourLinkText.innerHTML = general.faith.faithGroupThreeTitle;
		orgFourLink.href = general.faith.faithGroupThreeLink;
		
		orgFiveTitle.innerHTML = general.ideology.moderateGroupTitle;
		orgFiveDescription.innerHTML = general.ideology.moderateGroupDescription;
		orgFiveLinkText.innerHTML = general.ideology.moderateGroupTitle;
		orgFiveLink.href = general.ideology.moderateGroupLink;
	}
	else if(result.state === 'none' && result.ideology === 'liberal') {
		orgOneTitle.innerHTML = general.ideology.liberalGroupTitle;
		orgOneDescription.innerHTML = general.ideology.liberalGroupDescription;
		orgOneLinkText.innerHTML = general.ideology.liberalGroupTitle;
		orgOneLink.href = general.ideology.liberalGroupLink;
	}
	else if(result.state === 'none' && result.ideology === 'moderate') {
		orgOneTitle.innerHTML = general.ideology.moderateGroupTitle;
		orgOneDescription.innerHTML = general.ideology.moderateGroupDescription;
		orgOneLinkText.innerHTML = general.ideology.moderateGroupTitle;
		orgOneLink.href = general.ideology.moderateGroupLink;
	}
	
	// Display Org Two - No state option - conservative ideology - faith option is yes
	if(result.state === 'none' && result.ideology === 'conservative' && result.faith === 'yes') {			
		// Pull data from general object
		orgTwoTitle.innerHTML = general.faith.faithGroupOneTitle;
		orgTwoDescription.innerHTML = general.faith.faithGroupOneDescription;
		orgTwoLinkText.innerHTML = general.faith.faithGroupOneTitle;
		orgTwoLink.href = general.faith.faithGroupOneLink;
	}
	
	// Display Org Three - No state option - school age kids option is yes
	if(result.state === 'none' && result.school === 'yes' && result.ideology !== 'conservative') {			
		// Pull data from general object
		orgThreeTitle.innerHTML = general.school.yesSchoolGroupTitle;
		orgThreeDescription.innerHTML = general.school.yesSchoolGroupDescription;
		orgThreeLinkText.innerHTML = general.school.yesSchoolGroupTitle;
		orgThreeLink.href = general.school.yesSchoolGroupLink;
	}
	
	// Display Org Four - No state option - related to ethnicity
	if(result.state === 'none' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {			
		// Pull data from general object
		orgFourTitle.innerHTML = general.ethnicity.hispanicGroupTitle;
		orgFourDescription.innerHTML = general.ethnicity.hispanicGroupDescription;
		orgFourLinkText.innerHTML = general.ethnicity.hispanicGroupTitle;
		orgFourLink.href = general.ethnicity.hispanicGroupLink;
	}
	else if(result.state === 'none' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {			
		// Pull data from general object
		orgFourTitle.innerHTML = general.ethnicity.africanAmericanGroupTitle;
		orgFourDescription.innerHTML = general.ethnicity.africanAmericanGroupDescription;
		orgFourLinkText.innerHTML = general.ethnicity.africanAmericanGroupTitle;
		orgFourLink.href = general.ethnicity.africanAmericanGroupLink;
	}
	
	// Display Org Five - No state option - related to faith
	if(result.state === 'none' && result.faith === 'yes' && result.ideology !== 'conservative' && result.ideology !== 'none') {
		// Pull data from general object
		orgFiveTitle.innerHTML = general.faith.faithGroupOneTitle;
		orgFiveDescription.innerHTML = general.faith.faithGroupOneDescription;
		orgFiveLinkText.innerHTML = general.faith.faithGroupOneTitle;
		orgFiveLink.href = general.faith.faithGroupOneLink;
	}
	
	// Faith only orgs displayed if faith is only choice selected, rest will be filled with default choices
	if(result.state === 'none' && result.ideology === 'none' && result.ethnicity === 'none' && result.school === 'no' && result.faith === 'yes') {			
		// Pull data from general object
		// Org One
		orgOneTitle.innerHTML = general.faith.faithGroupOneTitle;
		orgOneDescription.innerHTML = general.faith.faithGroupOneDescription;
		orgOneLinkText.innerHTML = general.faith.faithGroupOneTitle;
		orgOneLink.href = general.faith.faithGroupOneLink;
		
		// Org Two
		orgTwoTitle.innerHTML = general.faith.faithGroupTwoTitle;
		orgTwoDescription.innerHTML = general.faith.faithGroupTwoDescription;
		orgTwoLinkText.innerHTML = general.faith.faithGroupTwoTitle;
		orgTwoLink.href = general.faith.faithGroupTwoLink;
		
		// Org Three
		orgThreeTitle.innerHTML = general.faith.faithGroupThreeTitle;
		orgThreeDescription.innerHTML = general.faith.faithGroupThreeDescription;
		orgThreeLinkText.innerHTML = general.faith.faithGroupThreeTitle;
		orgThreeLink.href = general.faith.faithGroupThreeLink;
	}
	else if(result.state === 'none' && result.ideology === 'none' && result.ethnicity === 'none' && result.school === '' && result.faith === 'yes') {			
		// Pull data from general object
		// Org One
		orgOneTitle.innerHTML = general.faith.faithGroupOneTitle;
		orgOneDescription.innerHTML = general.faith.faithGroupOneDescription;
		orgOneLinkText.innerHTML = general.faith.faithGroupOneTitle;
		orgOneLink.href = general.faith.faithGroupOneLink;
		
		// Org Two
		orgTwoTitle.innerHTML = general.faith.faithGroupTwoTitle;
		orgTwoDescription.innerHTML = general.faith.faithGroupTwoDescription;
		orgTwoLinkText.innerHTML = general.faith.faithGroupTwoTitle;
		orgTwoLink.href = general.faith.faithGroupTwoLink;
		
		// Org Three
		orgThreeTitle.innerHTML = general.faith.faithGroupThreeTitle;
		orgThreeDescription.innerHTML = general.faith.faithGroupThreeDescription;
		orgThreeLinkText.innerHTML = general.faith.faithGroupThreeTitle;
		orgThreeLink.href = general.faith.faithGroupThreeLink;
	}
	
	// Conservative only orgs displayed, rest will be filled with default choices - TBA
	
	// Output org results for Arizona
	// Display Org One - related to selected state 
	if(result.state === 'AZ') {
		orgOneTitle.innerHTML = AZ.stateGroupTitle;
		orgOneDescription.innerHTML = AZ.stateGroupDescription;
		orgOneLinkText.innerHTML = AZ.stateGroupTitle;
		orgOneLink.href = AZ.stateGroupLink;
	}
	
	// Display Org Two - related to ideology
	if(result.state === 'AZ' && result.ideology === 'conservative') {			
		// Pull data from AZ object
		// Conservative answer also pulls in faith options to round out 5 groups
		orgTwoTitle.innerHTML = AZ.ideology.conservativeGroupTitle;
		orgTwoDescription.innerHTML = AZ.ideology.conservativeGroupDescription;
		orgTwoLinkText.innerHTML = AZ.ideology.conservativeGroupTitle;
		orgTwoLink.href = AZ.ideology.conservativeGroupLink;
		
		orgThreeTitle.innerHTML = AZ.faith.yesFaithGroupTitle;
		orgThreeDescription.innerHTML = AZ.faith.yesFaithGroupDescription;
		orgThreeLinkText.innerHTML = AZ.faith.yesFaithGroupTitle;
		orgThreeLink.href = AZ.faith.yesFaithGroupLink;
		
		orgFourTitle.innerHTML = general.faith.faithGroupTwoTitle;
		orgFourDescription.innerHTML = general.faith.faithGroupTwoDescription;
		orgFourLinkText.innerHTML = general.faith.faithGroupTwoTitle;
		orgFourLink.href = general.faith.faithGroupTwoLink;
		
		orgFiveTitle.innerHTML = general.faith.faithGroupThreeTitle;
		orgFiveDescription.innerHTML = general.faith.faithGroupThreeDescription;
		orgFiveLinkText.innerHTML = general.faith.faithGroupThreeTitle;
		orgFiveLink.href = general.faith.faithGroupThreeLink;
	}
	else if(result.state === 'AZ' && result.ideology === 'liberal') {
		orgTwoTitle.innerHTML = AZ.ideology.liberalGroupTitle;
		orgTwoDescription.innerHTML = AZ.ideology.liberalGroupDescription;
		orgTwoLinkText.innerHTML = AZ.ideology.liberalGroupTitle;
		orgTwoLink.href = AZ.ideology.liberalGroupLink;
		
		orgFiveTitle.innerHTML = AZ.stateGroupTwoTitle;
		orgFiveDescription.innerHTML = AZ.stateGroupTwoDescription;
		orgFiveLinkText.innerHTML = AZ.stateGroupTwoTitle;
		orgFiveLink.href = AZ.stateGroupTwoLink;
	}
	else if(result.state === 'AZ' && result.ideology === 'moderate') {
		orgTwoTitle.innerHTML = AZ.ideology.moderateGroupTitle;
		orgTwoDescription.innerHTML = AZ.ideology.moderateGroupDescription;
		orgTwoLinkText.innerHTML = AZ.ideology.moderateGroupTitle;
		orgTwoLink.href = AZ.ideology.moderateGroupLink;
		
		orgFiveTitle.innerHTML = AZ.stateGroupTwoTitle;
		orgFiveDescription.innerHTML = AZ.stateGroupTwoDescription;
		orgFiveLinkText.innerHTML = AZ.stateGroupTwoTitle;
		orgFiveLink.href = AZ.stateGroupTwoLink;
	}
	else if(result.state === 'AZ' && result.ideology === 'none') {
		orgTwoTitle.innerHTML = AZ.stateGroupTwoTitle;
		orgTwoDescription.innerHTML = AZ.stateGroupTwoDescription;
		orgTwoLinkText.innerHTML = AZ.stateGroupTwoTitle;
		orgTwoLink.href = AZ.stateGroupTwoLink;
	}
	
	// Display Org Three - related to school age children & not conservative ideology
	if(result.state === 'AZ' && result.school === 'yes' && result.ideology !== 'conservative') {
		orgThreeTitle.innerHTML = AZ.school.yesSchoolGroupTitle;
		orgThreeDescription.innerHTML = AZ.school.yesSchoolGroupDescription;
		orgThreeLinkText.innerHTML = AZ.school.yesSchoolGroupTitle;
		orgThreeLink.href = AZ.school.yesSchoolGroupLink;
	}
	
	// Display Org Four - related to ethnicity & not conservative ideology
	if(result.state === 'AZ' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {
		orgFourTitle.innerHTML = AZ.ethnicity.hispanicGroupTitle;
		orgFourDescription.innerHTML = AZ.ethnicity.hispanicGroupDescription;
		orgFourLinkText.innerHTML = AZ.ethnicity.hispanicGroupTitle;
		orgFourLink.href = AZ.ethnicity.hispanicGroupLink;
	}
	else if(result.state === 'AZ' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {
		orgFourTitle.innerHTML = AZ.ethnicity.africanAmericanGroupTitle;
		orgFourDescription.innerHTML = AZ.ethnicity.africanAmericanGroupDescription;
		orgFourLinkText.innerHTML = AZ.ethnicity.africanAmericanGroupTitle;
		orgFourLink.href = AZ.ethnicity.africanAmericanGroupLink;
	}
	
	// Display Org Five - related to faith & not conservative ideology
	if(result.state === 'AZ' && result.faith === 'yes' && result.ideology !== 'conservative') {
		orgFiveTitle.innerHTML = AZ.faith.yesFaithGroupTitle;
		orgFiveDescription.innerHTML = AZ.faith.yesFaithGroupDescription;
		orgFiveLinkText.innerHTML = AZ.faith.yesFaithGroupTitle;
		orgFiveLink.href = AZ.faith.yesFaithGroupLink;
	}
	
	
	
	// Output org results for Georgia
	// Display Org One - related to selected state 
	if(result.state === 'GA' && result.ideology !== 'conservative') {
		orgOneTitle.innerHTML = GA.stateGroupTitle;
		orgOneDescription.innerHTML = GA.stateGroupDescription;
		orgOneLinkText.innerHTML = GA.stateGroupTitle;
		orgOneLink.href = GA.stateGroupLink;
	}
	
	// Display Org Two - related to ideology
	if(result.state === 'GA' && result.ideology === 'conservative') {			
		// Pull data from GA object
		// Conservative answer also pulls in faith options to round out 5 groups
		orgOneTitle.innerHTML = GA.ideology.conservativeGroupTitle;
		orgOneDescription.innerHTML = GA.ideology.conservativeGroupDescription;
		orgOneLinkText.innerHTML = GA.ideology.conservativeGroupTitle;
		orgOneLink.href = GA.ideology.conservativeGroupLink;
		
		orgTwoTitle.innerHTML = GA.ideology.conservativeGroupTwoTitle;
		orgTwoDescription.innerHTML = GA.ideology.conservativeGroupTwoDescription;
		orgTwoLinkText.innerHTML = GA.ideology.conservativeGroupTwoTitle;
		orgTwoLink.href = GA.ideology.conservativeGroupTwoLink;
		
		orgThreeTitle.innerHTML = GA.faith.yesFaithGroupTitle;
		orgThreeDescription.innerHTML = GA.faith.yesFaithGroupDescription;
		orgThreeLinkText.innerHTML = GA.faith.yesFaithGroupTitle;
		orgThreeLink.href = GA.faith.yesFaithGroupLink;
		
		orgFourTitle.innerHTML = general.faith.faithGroupTwoTitle;
		orgFourDescription.innerHTML = general.faith.faithGroupTwoDescription;
		orgFourLinkText.innerHTML = general.faith.faithGroupTwoTitle;
		orgFourLink.href = general.faith.faithGroupTwoLink;
		
		orgFiveTitle.innerHTML = general.faith.faithGroupThreeTitle;
		orgFiveDescription.innerHTML = general.faith.faithGroupThreeDescription;
		orgFiveLinkText.innerHTML = general.faith.faithGroupThreeTitle;
		orgFiveLink.href = general.faith.faithGroupThreeLink;
	}
	else if(result.state === 'GA' && result.ideology === 'liberal') {
		orgTwoTitle.innerHTML = GA.ideology.liberalGroupTitle;
		orgTwoDescription.innerHTML = GA.ideology.liberalGroupDescription;
		orgTwoLinkText.innerHTML = GA.ideology.liberalGroupTitle;
		orgTwoLink.href = GA.ideology.liberalGroupLink;
		
		orgFiveTitle.innerHTML = GA.stateGroupTwoTitle;
		orgFiveDescription.innerHTML = GA.stateGroupTwoDescription;
		orgFiveLinkText.innerHTML = GA.stateGroupTwoTitle;
		orgFiveLink.href = GA.stateGroupTwoLink;
	}
	else if(result.state === 'GA' && result.ideology === 'moderate') {
		orgTwoTitle.innerHTML = GA.ideology.moderateGroupTitle;
		orgTwoDescription.innerHTML = GA.ideology.moderateGroupDescription;
		orgTwoLinkText.innerHTML = GA.ideology.moderateGroupTitle;
		orgTwoLink.href = GA.ideology.moderateGroupLink;
		
		orgFiveTitle.innerHTML = GA.stateGroupTwoTitle;
		orgFiveDescription.innerHTML = GA.stateGroupTwoDescription;
		orgFiveLinkText.innerHTML = GA.stateGroupTwoTitle;
		orgFiveLink.href = GA.stateGroupTwoLink;
	}
	else if(result.state === 'GA' && result.ideology === 'none') {
		orgTwoTitle.innerHTML = GA.stateGroupTwoTitle;
		orgTwoDescription.innerHTML = GA.stateGroupTwoDescription;
		orgTwoLinkText.innerHTML = GA.stateGroupTwoTitle;
		orgTwoLink.href = GA.stateGroupTwoLink;
	}
	
	// Display Org Three - related to school age children
	if(result.state === 'GA' && result.school === 'yes' && result.ideology !== 'conservative') {
		orgThreeTitle.innerHTML = GA.school.yesSchoolGroupTitle;
		orgThreeDescription.innerHTML = GA.school.yesSchoolGroupDescription;
		orgThreeLinkText.innerHTML = GA.school.yesSchoolGroupTitle;
		orgThreeLink.href = GA.school.yesSchoolGroupLink;
	}
	
	// Display Org Four - related to ethnicity
	if(result.state === 'GA' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {
		orgFourTitle.innerHTML = GA.ethnicity.hispanicGroupTitle;
		orgFourDescription.innerHTML = GA.ethnicity.hispanicGroupDescription;
		orgFourLinkText.innerHTML = GA.ethnicity.hispanicGroupTitle;
		orgFourLink.href = GA.ethnicity.hispanicGroupLink;
	}
	else if(result.state === 'GA' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {
		orgFourTitle.innerHTML = GA.ethnicity.africanAmericanGroupTitle;
		orgFourDescription.innerHTML = GA.ethnicity.africanAmericanGroupDescription;
		orgFourLinkText.innerHTML = GA.ethnicity.africanAmericanGroupTitle;
		orgFourLink.href = GA.ethnicity.africanAmericanGroupLink;
	}
	
	// Display Org Five - related to faith
	if(result.state === 'GA' && result.faith === 'yes' && result.ideology !== 'conservative') {
		orgFiveTitle.innerHTML = GA.faith.yesFaithGroupTitle;
		orgFiveDescription.innerHTML = GA.faith.yesFaithGroupDescription;
		orgFiveLinkText.innerHTML = GA.faith.yesFaithGroupTitle;
		orgFiveLink.href = GA.faith.yesFaithGroupLink;
	}
	

	
	// Output org results for North Carolina
	// Display Org One - related to selected state 
	if(result.state === 'NC') {
		orgOneTitle.innerHTML = NC.stateGroupTitle;
		orgOneDescription.innerHTML = NC.stateGroupDescription;
		orgOneLinkText.innerHTML = NC.stateGroupTitle;
		orgOneLink.href = NC.stateGroupLink;
	}
	
	// Display Org Two - related to ideology
	if(result.state === 'NC' && result.ideology === 'conservative') {			
		// Pull data from NC object
		// Conservative answer also pulls in faith options to round out 5 groups
		orgOneTitle.innerHTML = NC.ideology.conservativeGroupTitle;
		orgOneDescription.innerHTML = NC.ideology.conservativeGroupDescription;
		orgOneLinkText.innerHTML = NC.ideology.conservativeGroupTitle;
		orgOneLink.href = NC.ideology.conservativeGroupLink;
		
		orgTwoTitle.innerHTML = NC.ideology.conservativeGroupTwoTitle;
		orgTwoDescription.innerHTML = NC.ideology.conservativeGroupTwoDescription;
		orgTwoLinkText.innerHTML = NC.ideology.conservativeGroupTwoTitle;
		orgTwoLink.href = NC.ideology.conservativeGroupTwoLink;
		
		orgThreeTitle.innerHTML = NC.faith.yesFaithGroupTitle;
		orgThreeDescription.innerHTML = NC.faith.yesFaithGroupDescription;
		orgThreeLinkText.innerHTML = NC.faith.yesFaithGroupTitle;
		orgThreeLink.href = NC.faith.yesFaithGroupLink;
		
		orgFourTitle.innerHTML = general.faith.faithGroupTwoTitle;
		orgFourDescription.innerHTML = general.faith.faithGroupTwoDescription;
		orgFourLinkText.innerHTML = general.faith.faithGroupTwoTitle;
		orgFourLink.href = general.faith.faithGroupTwoLink;
		
		orgFiveTitle.innerHTML = general.faith.faithGroupThreeTitle;
		orgFiveDescription.innerHTML = general.faith.faithGroupThreeDescription;
		orgFiveLinkText.innerHTML = general.faith.faithGroupThreeTitle;
		orgFiveLink.href = general.faith.faithGroupThreeLink;
	}
	else if(result.state === 'NC' && result.ideology === 'liberal') {
		orgTwoTitle.innerHTML = NC.ideology.liberalGroupTitle;
		orgTwoDescription.innerHTML = NC.ideology.liberalGroupDescription;
		orgTwoLinkText.innerHTML = NC.ideology.liberalGroupTitle;
		orgTwoLink.href = NC.ideology.liberalGroupLink;
		
		orgFiveTitle.innerHTML = NC.stateGroupTwoTitle;
		orgFiveDescription.innerHTML = NC.stateGroupTwoDescription;
		orgFiveLinkText.innerHTML = NC.stateGroupTwoTitle;
		orgFiveLink.href = NC.stateGroupTwoLink;
	}
	else if(result.state === 'NC' && result.ideology === 'moderate') {
		orgTwoTitle.innerHTML = NC.ideology.moderateGroupTitle;
		orgTwoDescription.innerHTML = NC.ideology.moderateGroupDescription;
		orgTwoLinkText.innerHTML = NC.ideology.moderateGroupTitle;
		orgTwoLink.href = NC.ideology.moderateGroupLink;
		
		orgFiveTitle.innerHTML = NC.stateGroupTwoTitle;
		orgFiveDescription.innerHTML = NC.stateGroupTwoDescription;
		orgFiveLinkText.innerHTML = NC.stateGroupTwoTitle;
		orgFiveLink.href = NC.stateGroupTwoLink;
	}
	else if(result.state === 'NC' && result.ideology === 'none') {
		orgTwoTitle.innerHTML = NC.stateGroupTwoTitle;
		orgTwoDescription.innerHTML = NC.stateGroupTwoDescription;
		orgTwoLinkText.innerHTML = NC.stateGroupTwoTitle;
		orgTwoLink.href = NC.stateGroupTwoLink;
	}
	
	// Display Org Three - related to school age children
	if(result.state === 'NC' && result.school === 'yes' && result.ideology !== 'conservative') {
		orgThreeTitle.innerHTML = NC.school.yesSchoolGroupTitle;
		orgThreeDescription.innerHTML = NC.school.yesSchoolGroupDescription;
		orgThreeLinkText.innerHTML = NC.school.yesSchoolGroupTitle;
		orgThreeLink.href = NC.school.yesSchoolGroupLink;
	}
	
	// Display Org Four - related to ethnicity
	if(result.state === 'NC' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {
		orgFourTitle.innerHTML = NC.ethnicity.hispanicGroupTitle;
		orgFourDescription.innerHTML = NC.ethnicity.hispanicGroupDescription;
		orgFourLinkText.innerHTML = NC.ethnicity.hispanicGroupTitle;
		orgFourLink.href = NC.ethnicity.hispanicGroupLink;
	}
	else if(result.state === 'NC' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {
		orgFourTitle.innerHTML = NC.ethnicity.africanAmericanGroupTitle;
		orgFourDescription.innerHTML = NC.ethnicity.africanAmericanGroupDescription;
		orgFourLinkText.innerHTML = NC.ethnicity.africanAmericanGroupTitle;
		orgFourLink.href = NC.ethnicity.africanAmericanGroupLink;
	}
	
	// Display Org Five - related to faith
	if(result.state === 'NC' && result.faith === 'yes' && result.ideology !== 'conservative') {
		orgFiveTitle.innerHTML = NC.faith.yesFaithGroupTitle;
		orgFiveDescription.innerHTML = NC.faith.yesFaithGroupDescription;
		orgFiveLinkText.innerHTML = NC.faith.yesFaithGroupTitle;
		orgFiveLink.href = NC.faith.yesFaithGroupLink;
	}
	
	
	
	// Output org results for Pennsylvania
	// Display Org One - related to selected state 
	if(result.state === 'PA') {
		orgOneTitle.innerHTML = PA.stateGroupTitle;
		orgOneDescription.innerHTML = PA.stateGroupDescription;
		orgOneLinkText.innerHTML = PA.stateGroupTitle;
		orgOneLink.href = PA.stateGroupLink;
	}
	
	// Display Org Two - related to ideology
	if(result.state === 'PA' && result.ideology === 'conservative') {			
		// Pull data from PA object
		// Conservative answer also pulls in faith options to round out 5 groups
		orgTwoTitle.innerHTML = PA.ideology.conservativeGroupTitle;
		orgTwoDescription.innerHTML = PA.ideology.conservativeGroupDescription;
		orgTwoLinkText.innerHTML = PA.ideology.conservativeGroupTitle;
		orgTwoLink.href = PA.ideology.conservativeGroupLink;
		
		orgThreeTitle.innerHTML = PA.faith.yesFaithGroupTitle;
		orgThreeDescription.innerHTML = PA.faith.yesFaithGroupDescription;
		orgThreeLinkText.innerHTML = PA.faith.yesFaithGroupTitle;
		orgThreeLink.href = PA.faith.yesFaithGroupLink;
		
		orgFourTitle.innerHTML = general.faith.faithGroupTwoTitle;
		orgFourDescription.innerHTML = general.faith.faithGroupTwoDescription;
		orgFourLinkText.innerHTML = general.faith.faithGroupTwoTitle;
		orgFourLink.href = general.faith.faithGroupTwoLink;
		
		orgFiveTitle.innerHTML = general.faith.faithGroupThreeTitle;
		orgFiveDescription.innerHTML = general.faith.faithGroupThreeDescription;
		orgFiveLinkText.innerHTML = general.faith.faithGroupThreeTitle;
		orgFiveLink.href = general.faith.faithGroupThreeLink;
	}
	else if(result.state === 'PA' && result.ideology === 'liberal') {
		orgTwoTitle.innerHTML = PA.ideology.liberalGroupTitle;
		orgTwoDescription.innerHTML = PA.ideology.liberalGroupDescription;
		orgTwoLinkText.innerHTML = PA.ideology.liberalGroupTitle;
		orgTwoLink.href = PA.ideology.liberalGroupLink;
		
		orgFiveTitle.innerHTML = PA.stateGroupTwoTitle;
		orgFiveDescription.innerHTML = PA.stateGroupTwoDescription;
		orgFiveLinkText.innerHTML = PA.stateGroupTwoTitle;
		orgFiveLink.href = PA.stateGroupTwoLink;
	}
	else if(result.state === 'PA' && result.ideology === 'moderate') {
		orgTwoTitle.innerHTML = PA.ideology.moderateGroupTitle;
		orgTwoDescription.innerHTML = PA.ideology.moderateGroupDescription;
		orgTwoLinkText.innerHTML = PA.ideology.moderateGroupTitle;
		orgTwoLink.href = PA.ideology.moderateGroupLink;
		
		orgFiveTitle.innerHTML = PA.stateGroupTwoTitle;
		orgFiveDescription.innerHTML = PA.stateGroupTwoDescription;
		orgFiveLinkText.innerHTML = PA.stateGroupTwoTitle;
		orgFiveLink.href = PA.stateGroupTwoLink;
	}
	else if(result.state === 'PA' && result.ideology === 'none') {
		orgTwoTitle.innerHTML = PA.stateGroupTwoTitle;
		orgTwoDescription.innerHTML = PA.stateGroupTwoDescription;
		orgTwoLinkText.innerHTML = PA.stateGroupTwoTitle;
		orgTwoLink.href = PA.stateGroupTwoLink;
	}
	
	// Display Org Three - related to school age children
	if(result.state === 'PA' && result.school === 'yes' && result.ideology !== 'conservative') {
		orgThreeTitle.innerHTML = PA.school.yesSchoolGroupTitle;
		orgThreeDescription.innerHTML = PA.school.yesSchoolGroupDescription;
		orgThreeLinkText.innerHTML = PA.school.yesSchoolGroupTitle;
		orgThreeLink.href = PA.school.yesSchoolGroupLink;
	}
	
	// Display Org Four - related to ethnicity
	if(result.state === 'PA' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {
		orgFourTitle.innerHTML = PA.ethnicity.hispanicGroupTitle;
		orgFourDescription.innerHTML = PA.ethnicity.hispanicGroupDescription;
		orgFourLinkText.innerHTML = PA.ethnicity.hispanicGroupTitle;
		orgFourLink.href = PA.ethnicity.hispanicGroupLink;
	}
	else if(result.state === 'PA' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {
		orgFourTitle.innerHTML = PA.ethnicity.africanAmericanGroupTitle;
		orgFourDescription.innerHTML = PA.ethnicity.africanAmericanGroupDescription;
		orgFourLinkText.innerHTML = PA.ethnicity.africanAmericanGroupTitle;
		orgFourLink.href = PA.ethnicity.africanAmericanGroupLink;
	}
	
	// Display Org Five - related to faith
	if(result.state === 'PA' && result.faith === 'yes' && result.ideology !== 'conservative') {
		orgFiveTitle.innerHTML = PA.faith.yesFaithGroupTitle;
		orgFiveDescription.innerHTML = PA.faith.yesFaithGroupDescription;
		orgFiveLinkText.innerHTML = PA.faith.yesFaithGroupTitle;
		orgFiveLink.href = PA.faith.yesFaithGroupLink;
	}
	
	
	// Output org results for Wisconsin
	// Display Org One - related to selected state 
	if(result.state === 'WI') {
		orgOneTitle.innerHTML = WI.stateGroupTitle;
		orgOneDescription.innerHTML = WI.stateGroupDescription;
		orgOneLinkText.innerHTML = WI.stateGroupTitle;
		orgOneLink.href = WI.stateGroupLink;
	}
	
	// Display Org Two - related to ideology
	if(result.state === 'WI' && result.ideology === 'conservative') {			
		// Pull data from WI object
		// Conservative answer also pulls in faith options to round out 5 groups
		orgTwoTitle.innerHTML = WI.ideology.conservativeGroupTitle;
		orgTwoDescription.innerHTML = WI.ideology.conservativeGroupDescription;
		orgTwoLinkText.innerHTML = WI.ideology.conservativeGroupTitle;
		orgTwoLink.href = WI.ideology.conservativeGroupLink;
		
		orgThreeTitle.innerHTML = WI.faith.yesFaithGroupTitle;
		orgThreeDescription.innerHTML = WI.faith.yesFaithGroupDescription;
		orgThreeLinkText.innerHTML = WI.faith.yesFaithGroupTitle;
		orgThreeLink.href = WI.faith.yesFaithGroupLink;
		
		orgFourTitle.innerHTML = general.faith.faithGroupTwoTitle;
		orgFourDescription.innerHTML = general.faith.faithGroupTwoDescription;
		orgFourLinkText.innerHTML = general.faith.faithGroupTwoTitle;
		orgFourLink.href = general.faith.faithGroupTwoLink;
		
		orgFiveTitle.innerHTML = general.faith.faithGroupThreeTitle;
		orgFiveDescription.innerHTML = general.faith.faithGroupThreeDescription;
		orgFiveLinkText.innerHTML = general.faith.faithGroupThreeTitle;
		orgFiveLink.href = general.faith.faithGroupThreeLink;
	}
	else if(result.state === 'WI' && result.ideology === 'liberal') {
		orgTwoTitle.innerHTML = WI.ideology.liberalGroupTitle;
		orgTwoDescription.innerHTML = WI.ideology.liberalGroupDescription;
		orgTwoLinkText.innerHTML = WI.ideology.liberalGroupTitle;
		orgTwoLink.href = WI.ideology.liberalGroupLink;
		
		orgFiveTitle.innerHTML = WI.stateGroupTwoTitle;
		orgFiveDescription.innerHTML = WI.stateGroupTwoDescription;
		orgFiveLinkText.innerHTML = WI.stateGroupTwoTitle;
		orgFiveLink.href = WI.stateGroupTwoLink;
	}
	else if(result.state === 'WI' && result.ideology === 'moderate') {
		orgTwoTitle.innerHTML = WI.ideology.moderateGroupTitle;
		orgTwoDescription.innerHTML = WI.ideology.moderateGroupDescription;
		orgTwoLinkText.innerHTML = WI.ideology.moderateGroupTitle;
		orgTwoLink.href = WI.ideology.moderateGroupLink;
		
		orgFiveTitle.innerHTML = WI.stateGroupTwoTitle;
		orgFiveDescription.innerHTML = WI.stateGroupTwoDescription;
		orgFiveLinkText.innerHTML = WI.stateGroupTwoTitle;
		orgFiveLink.href = WI.stateGroupTwoLink;
	}
	else if(result.state === 'WI' && result.ideology === 'none') {
		orgTwoTitle.innerHTML = WI.stateGroupTwoTitle;
		orgTwoDescription.innerHTML = WI.stateGroupTwoDescription;
		orgTwoLinkText.innerHTML = WI.stateGroupTwoTitle;
		orgTwoLink.href = WI.stateGroupTwoLink;
	}
	
	// Display Org Three - related to school age children
	if(result.state === 'WI' && result.school === 'yes' && result.ideology !== 'conservative') {
		orgThreeTitle.innerHTML = WI.school.yesSchoolGroupTitle;
		orgThreeDescription.innerHTML = WI.school.yesSchoolGroupDescription;
		orgThreeLinkText.innerHTML = WI.school.yesSchoolGroupTitle;
		orgThreeLink.href = WI.school.yesSchoolGroupLink;
	}
	
	// Display Org Four - related to ethnicity
	if(result.state === 'WI' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {
		orgFourTitle.innerHTML = WI.ethnicity.hispanicGroupTitle;
		orgFourDescription.innerHTML = WI.ethnicity.hispanicGroupDescription;
		orgFourLinkText.innerHTML = WI.ethnicity.hispanicGroupTitle;
		orgFourLink.href = WI.ethnicity.hispanicGroupLink;
	}
	else if(result.state === 'WI' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {
		orgFourTitle.innerHTML = WI.ethnicity.africanAmericanGroupTitle;
		orgFourDescription.innerHTML = WI.ethnicity.africanAmericanGroupDescription;
		orgFourLinkText.innerHTML = WI.ethnicity.africanAmericanGroupTitle;
		orgFourLink.href = WI.ethnicity.africanAmericanGroupLink;
	}
	
	// Display Org Five - related to faith
	if(result.state === 'WI' && result.faith === 'yes' && result.ideology !== 'conservative') {
		orgFiveTitle.innerHTML = WI.faith.yesFaithGroupTitle;
		orgFiveDescription.innerHTML = WI.faith.yesFaithGroupDescription;
		orgFiveLinkText.innerHTML = WI.faith.yesFaithGroupTitle;
		orgFiveLink.href = WI.faith.yesFaithGroupLink;
	}
	
});

// check if ngp-form element exists and if it does add click event to .at-submit element
// display results
// setTimeout(() => {
// 	if(document.querySelector('.cta-capture-section .ngp-form')) {	
// 		document.querySelector('.cta-capture-section .at-submit').addEventListener('click', () => {		
// 			setTimeout(() => {
// 				if(document.querySelector('.cta-capture-section .thankYou')) {
// 					// Display org results
// 					quizSection.scrollIntoView({behavior: "smooth", block: "start"});
// 					quizSection.style.backgroundColor = '#fcd8bb';
// 					ctaCaptureSection.classList.add('hidden');
// 					thanksMessage.classList.remove('hidden');
// 					orgs.classList.remove('hidden');
// 					takeActionMessage.classList.remove('hidden');
// 					
// 					// display results					
// 					// Display Org One - related to ideology
// 					if(result.state === 'none' && result.ideology === 'conservative') {			
// 						// Pull data from general object
// 						orgOneTitle.innerHTML = general.ideology.conservativeGroupTitle;
// 						orgOneDescription.innerHTML = general.ideology.conservativeGroupDescription;
// 						orgOneLinkText.innerHTML = general.ideology.conservativeGroupTitle;
// 						orgOneLink.href = general.ideology.conservativeGroupLink;
// 						
// 						orgTwoTitle.innerHTML = general.faith.faithGroupOneTitle;
// 						orgTwoDescription.innerHTML = general.faith.faithGroupOneDescription;
// 						orgTwoLinkText.innerHTML = general.faith.faithGroupOneTitle;
// 						orgTwoLink.href = general.faith.faithGroupOneLink;
// 						
// 						orgThreeTitle.innerHTML = general.faith.faithGroupTwoTitle;
// 						orgThreeDescription.innerHTML = general.faith.faithGroupTwoDescription;
// 						orgThreeLinkText.innerHTML = general.faith.faithGroupTwoTitle;
// 						orgThreeLink.href = general.faith.faithGroupTwoLink;
// 						
// 						orgFourTitle.innerHTML = general.faith.faithGroupThreeTitle;
// 						orgFourDescription.innerHTML = general.faith.faithGroupThreeDescription;
// 						orgFourLinkText.innerHTML = general.faith.faithGroupThreeTitle;
// 						orgFourLink.href = general.faith.faithGroupThreeLink;
// 						
// 						orgFiveTitle.innerHTML = general.ideology.moderateGroupTitle;
// 						orgFiveDescription.innerHTML = general.ideology.moderateGroupDescription;
// 						orgFiveLinkText.innerHTML = general.ideology.moderateGroupTitle;
// 						orgFiveLink.href = general.ideology.moderateGroupLink;
// 					}
// 					else if(result.state === 'none' && result.ideology === 'liberal') {
// 						orgOneTitle.innerHTML = general.ideology.liberalGroupTitle;
// 						orgOneDescription.innerHTML = general.ideology.liberalGroupDescription;
// 						orgOneLinkText.innerHTML = general.ideology.liberalGroupTitle;
// 						orgOneLink.href = general.ideology.liberalGroupLink;
// 					}
// 					else if(result.state === 'none' && result.ideology === 'moderate') {
// 						orgOneTitle.innerHTML = general.ideology.moderateGroupTitle;
// 						orgOneDescription.innerHTML = general.ideology.moderateGroupDescription;
// 						orgOneLinkText.innerHTML = general.ideology.moderateGroupTitle;
// 						orgOneLink.href = general.ideology.moderateGroupLink;
// 					}
// 					
// 					// Display Org Two - No state option - conservative ideology - faith option is yes
// 					if(result.state === 'none' && result.ideology === 'conservative' && result.faith === 'yes') {			
// 						// Pull data from general object
// 						orgTwoTitle.innerHTML = general.faith.faithGroupOneTitle;
// 						orgTwoDescription.innerHTML = general.faith.faithGroupOneDescription;
// 						orgTwoLinkText.innerHTML = general.faith.faithGroupOneTitle;
// 						orgTwoLink.href = general.faith.faithGroupOneLink;
// 					}
// 					
// 					// Display Org Three - No state option - school age kids option is yes
// 					if(result.state === 'none' && result.school === 'yes' && result.ideology !== 'conservative') {			
// 						// Pull data from general object
// 						orgThreeTitle.innerHTML = general.school.yesSchoolGroupTitle;
// 						orgThreeDescription.innerHTML = general.school.yesSchoolGroupDescription;
// 						orgThreeLinkText.innerHTML = general.school.yesSchoolGroupTitle;
// 						orgThreeLink.href = general.school.yesSchoolGroupLink;
// 					}
// 					
// 					// Display Org Four - No state option - related to ethnicity
// 					if(result.state === 'none' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {			
// 						// Pull data from general object
// 						orgFourTitle.innerHTML = general.ethnicity.hispanicGroupTitle;
// 						orgFourDescription.innerHTML = general.ethnicity.hispanicGroupDescription;
// 						orgFourLinkText.innerHTML = general.ethnicity.hispanicGroupTitle;
// 						orgFourLink.href = general.ethnicity.hispanicGroupLink;
// 					}
// 					else if(result.state === 'none' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {			
// 						// Pull data from general object
// 						orgFourTitle.innerHTML = general.ethnicity.africanAmericanGroupTitle;
// 						orgFourDescription.innerHTML = general.ethnicity.africanAmericanGroupDescription;
// 						orgFourLinkText.innerHTML = general.ethnicity.africanAmericanGroupTitle;
// 						orgFourLink.href = general.ethnicity.africanAmericanGroupLink;
// 					}
// 					
// 					// Display Org Five - No state option - related to faith
// 					if(result.state === 'none' && result.faith === 'yes' && result.ideology !== 'conservative' && result.ideology !== 'none') {
// 						// Pull data from general object
// 						orgFiveTitle.innerHTML = general.faith.faithGroupOneTitle;
// 						orgFiveDescription.innerHTML = general.faith.faithGroupOneDescription;
// 						orgFiveLinkText.innerHTML = general.faith.faithGroupOneTitle;
// 						orgFiveLink.href = general.faith.faithGroupOneLink;
// 					}
// 					
// 					// Faith only orgs displayed if faith is only choice selected, rest will be filled with default choices
// 					if(result.state === 'none' && result.ideology === 'none' && result.ethnicity === 'none' && result.school === 'no' && result.faith === 'yes') {			
// 						// Pull data from general object
// 						// Org One
// 						orgOneTitle.innerHTML = general.faith.faithGroupOneTitle;
// 						orgOneDescription.innerHTML = general.faith.faithGroupOneDescription;
// 						orgOneLinkText.innerHTML = general.faith.faithGroupOneTitle;
// 						orgOneLink.href = general.faith.faithGroupOneLink;
// 						
// 						// Org Two
// 						orgTwoTitle.innerHTML = general.faith.faithGroupTwoTitle;
// 						orgTwoDescription.innerHTML = general.faith.faithGroupTwoDescription;
// 						orgTwoLinkText.innerHTML = general.faith.faithGroupTwoTitle;
// 						orgTwoLink.href = general.faith.faithGroupTwoLink;
// 						
// 						// Org Three
// 						orgThreeTitle.innerHTML = general.faith.faithGroupThreeTitle;
// 						orgThreeDescription.innerHTML = general.faith.faithGroupThreeDescription;
// 						orgThreeLinkText.innerHTML = general.faith.faithGroupThreeTitle;
// 						orgThreeLink.href = general.faith.faithGroupThreeLink;
// 					}
// 					else if(result.state === 'none' && result.ideology === 'none' && result.ethnicity === 'none' && result.school === '' && result.faith === 'yes') {			
// 						// Pull data from general object
// 						// Org One
// 						orgOneTitle.innerHTML = general.faith.faithGroupOneTitle;
// 						orgOneDescription.innerHTML = general.faith.faithGroupOneDescription;
// 						orgOneLinkText.innerHTML = general.faith.faithGroupOneTitle;
// 						orgOneLink.href = general.faith.faithGroupOneLink;
// 						
// 						// Org Two
// 						orgTwoTitle.innerHTML = general.faith.faithGroupTwoTitle;
// 						orgTwoDescription.innerHTML = general.faith.faithGroupTwoDescription;
// 						orgTwoLinkText.innerHTML = general.faith.faithGroupTwoTitle;
// 						orgTwoLink.href = general.faith.faithGroupTwoLink;
// 						
// 						// Org Three
// 						orgThreeTitle.innerHTML = general.faith.faithGroupThreeTitle;
// 						orgThreeDescription.innerHTML = general.faith.faithGroupThreeDescription;
// 						orgThreeLinkText.innerHTML = general.faith.faithGroupThreeTitle;
// 						orgThreeLink.href = general.faith.faithGroupThreeLink;
// 					}
// 					
// 					// Conservative only orgs displayed, rest will be filled with default choices - TBA
// 					
// 					// Output org results for Arizona
// 					// Display Org One - related to selected state 
// 					if(result.state === 'AZ') {
// 						orgOneTitle.innerHTML = AZ.stateGroupTitle;
// 						orgOneDescription.innerHTML = AZ.stateGroupDescription;
// 						orgOneLinkText.innerHTML = AZ.stateGroupTitle;
// 						orgOneLink.href = AZ.stateGroupLink;
// 					}
// 					
// 					// Display Org Two - related to ideology
// 					if(result.state === 'AZ' && result.ideology === 'conservative') {			
// 						// Pull data from AZ object
// 						// Conservative answer also pulls in faith options to round out 5 groups
// 						orgTwoTitle.innerHTML = AZ.ideology.conservativeGroupTitle;
// 						orgTwoDescription.innerHTML = AZ.ideology.conservativeGroupDescription;
// 						orgTwoLinkText.innerHTML = AZ.ideology.conservativeGroupTitle;
// 						orgTwoLink.href = AZ.ideology.conservativeGroupLink;
// 						
// 						orgThreeTitle.innerHTML = AZ.faith.yesFaithGroupTitle;
// 						orgThreeDescription.innerHTML = AZ.faith.yesFaithGroupDescription;
// 						orgThreeLinkText.innerHTML = AZ.faith.yesFaithGroupTitle;
// 						orgThreeLink.href = AZ.faith.yesFaithGroupLink;
// 						
// 						orgFourTitle.innerHTML = general.faith.faithGroupTwoTitle;
// 						orgFourDescription.innerHTML = general.faith.faithGroupTwoDescription;
// 						orgFourLinkText.innerHTML = general.faith.faithGroupTwoTitle;
// 						orgFourLink.href = general.faith.faithGroupTwoLink;
// 						
// 						orgFiveTitle.innerHTML = general.faith.faithGroupThreeTitle;
// 						orgFiveDescription.innerHTML = general.faith.faithGroupThreeDescription;
// 						orgFiveLinkText.innerHTML = general.faith.faithGroupThreeTitle;
// 						orgFiveLink.href = general.faith.faithGroupThreeLink;
// 					}
// 					else if(result.state === 'AZ' && result.ideology === 'liberal') {
// 						orgTwoTitle.innerHTML = AZ.ideology.liberalGroupTitle;
// 						orgTwoDescription.innerHTML = AZ.ideology.liberalGroupDescription;
// 						orgTwoLinkText.innerHTML = AZ.ideology.liberalGroupTitle;
// 						orgTwoLink.href = AZ.ideology.liberalGroupLink;
// 						
// 						orgFiveTitle.innerHTML = AZ.stateGroupTwoTitle;
// 						orgFiveDescription.innerHTML = AZ.stateGroupTwoDescription;
// 						orgFiveLinkText.innerHTML = AZ.stateGroupTwoTitle;
// 						orgFiveLink.href = AZ.stateGroupTwoLink;
// 					}
// 					else if(result.state === 'AZ' && result.ideology === 'moderate') {
// 						orgTwoTitle.innerHTML = AZ.ideology.moderateGroupTitle;
// 						orgTwoDescription.innerHTML = AZ.ideology.moderateGroupDescription;
// 						orgTwoLinkText.innerHTML = AZ.ideology.moderateGroupTitle;
// 						orgTwoLink.href = AZ.ideology.moderateGroupLink;
// 						
// 						orgFiveTitle.innerHTML = AZ.stateGroupTwoTitle;
// 						orgFiveDescription.innerHTML = AZ.stateGroupTwoDescription;
// 						orgFiveLinkText.innerHTML = AZ.stateGroupTwoTitle;
// 						orgFiveLink.href = AZ.stateGroupTwoLink;
// 					}
// 					else if(result.state === 'AZ' && result.ideology === 'none') {
// 						orgTwoTitle.innerHTML = AZ.stateGroupTwoTitle;
// 						orgTwoDescription.innerHTML = AZ.stateGroupTwoDescription;
// 						orgTwoLinkText.innerHTML = AZ.stateGroupTwoTitle;
// 						orgTwoLink.href = AZ.stateGroupTwoLink;
// 					}
// 					
// 					// Display Org Three - related to school age children & not conservative ideology
// 					if(result.state === 'AZ' && result.school === 'yes' && result.ideology !== 'conservative') {
// 						orgThreeTitle.innerHTML = AZ.school.yesSchoolGroupTitle;
// 						orgThreeDescription.innerHTML = AZ.school.yesSchoolGroupDescription;
// 						orgThreeLinkText.innerHTML = AZ.school.yesSchoolGroupTitle;
// 						orgThreeLink.href = AZ.school.yesSchoolGroupLink;
// 					}
// 					
// 					// Display Org Four - related to ethnicity & not conservative ideology
// 					if(result.state === 'AZ' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {
// 						orgFourTitle.innerHTML = AZ.ethnicity.hispanicGroupTitle;
// 						orgFourDescription.innerHTML = AZ.ethnicity.hispanicGroupDescription;
// 						orgFourLinkText.innerHTML = AZ.ethnicity.hispanicGroupTitle;
// 						orgFourLink.href = AZ.ethnicity.hispanicGroupLink;
// 					}
// 					else if(result.state === 'AZ' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {
// 						orgFourTitle.innerHTML = AZ.ethnicity.africanAmericanGroupTitle;
// 						orgFourDescription.innerHTML = AZ.ethnicity.africanAmericanGroupDescription;
// 						orgFourLinkText.innerHTML = AZ.ethnicity.africanAmericanGroupTitle;
// 						orgFourLink.href = AZ.ethnicity.africanAmericanGroupLink;
// 					}
// 					
// 					// Display Org Five - related to faith & not conservative ideology
// 					if(result.state === 'AZ' && result.faith === 'yes' && result.ideology !== 'conservative') {
// 						orgFiveTitle.innerHTML = AZ.faith.yesFaithGroupTitle;
// 						orgFiveDescription.innerHTML = AZ.faith.yesFaithGroupDescription;
// 						orgFiveLinkText.innerHTML = AZ.faith.yesFaithGroupTitle;
// 						orgFiveLink.href = AZ.faith.yesFaithGroupLink;
// 					}
// 					
// 					
// 					
// 					// Output org results for Georgia
// 					// Display Org One - related to selected state 
// 					if(result.state === 'GA' && result.ideology !== 'conservative') {
// 						orgOneTitle.innerHTML = GA.stateGroupTitle;
// 						orgOneDescription.innerHTML = GA.stateGroupDescription;
// 						orgOneLinkText.innerHTML = GA.stateGroupTitle;
// 						orgOneLink.href = GA.stateGroupLink;
// 					}
// 					
// 					// Display Org Two - related to ideology
// 					if(result.state === 'GA' && result.ideology === 'conservative') {			
// 						// Pull data from GA object
// 						// Conservative answer also pulls in faith options to round out 5 groups
// 						orgOneTitle.innerHTML = GA.ideology.conservativeGroupTitle;
// 						orgOneDescription.innerHTML = GA.ideology.conservativeGroupDescription;
// 						orgOneLinkText.innerHTML = GA.ideology.conservativeGroupTitle;
// 						orgOneLink.href = GA.ideology.conservativeGroupLink;
// 						
// 						orgTwoTitle.innerHTML = GA.ideology.conservativeGroupTwoTitle;
// 						orgTwoDescription.innerHTML = GA.ideology.conservativeGroupTwoDescription;
// 						orgTwoLinkText.innerHTML = GA.ideology.conservativeGroupTwoTitle;
// 						orgTwoLink.href = GA.ideology.conservativeGroupTwoLink;
// 						
// 						orgThreeTitle.innerHTML = GA.faith.yesFaithGroupTitle;
// 						orgThreeDescription.innerHTML = GA.faith.yesFaithGroupDescription;
// 						orgThreeLinkText.innerHTML = GA.faith.yesFaithGroupTitle;
// 						orgThreeLink.href = GA.faith.yesFaithGroupLink;
// 						
// 						orgFourTitle.innerHTML = general.faith.faithGroupTwoTitle;
// 						orgFourDescription.innerHTML = general.faith.faithGroupTwoDescription;
// 						orgFourLinkText.innerHTML = general.faith.faithGroupTwoTitle;
// 						orgFourLink.href = general.faith.faithGroupTwoLink;
// 						
// 						orgFiveTitle.innerHTML = general.faith.faithGroupThreeTitle;
// 						orgFiveDescription.innerHTML = general.faith.faithGroupThreeDescription;
// 						orgFiveLinkText.innerHTML = general.faith.faithGroupThreeTitle;
// 						orgFiveLink.href = general.faith.faithGroupThreeLink;
// 					}
// 					else if(result.state === 'GA' && result.ideology === 'liberal') {
// 						orgTwoTitle.innerHTML = GA.ideology.liberalGroupTitle;
// 						orgTwoDescription.innerHTML = GA.ideology.liberalGroupDescription;
// 						orgTwoLinkText.innerHTML = GA.ideology.liberalGroupTitle;
// 						orgTwoLink.href = GA.ideology.liberalGroupLink;
// 						
// 						orgFiveTitle.innerHTML = GA.stateGroupTwoTitle;
// 						orgFiveDescription.innerHTML = GA.stateGroupTwoDescription;
// 						orgFiveLinkText.innerHTML = GA.stateGroupTwoTitle;
// 						orgFiveLink.href = GA.stateGroupTwoLink;
// 					}
// 					else if(result.state === 'GA' && result.ideology === 'moderate') {
// 						orgTwoTitle.innerHTML = GA.ideology.moderateGroupTitle;
// 						orgTwoDescription.innerHTML = GA.ideology.moderateGroupDescription;
// 						orgTwoLinkText.innerHTML = GA.ideology.moderateGroupTitle;
// 						orgTwoLink.href = GA.ideology.moderateGroupLink;
// 						
// 						orgFiveTitle.innerHTML = GA.stateGroupTwoTitle;
// 						orgFiveDescription.innerHTML = GA.stateGroupTwoDescription;
// 						orgFiveLinkText.innerHTML = GA.stateGroupTwoTitle;
// 						orgFiveLink.href = GA.stateGroupTwoLink;
// 					}
// 					else if(result.state === 'GA' && result.ideology === 'none') {
// 						orgTwoTitle.innerHTML = GA.stateGroupTwoTitle;
// 						orgTwoDescription.innerHTML = GA.stateGroupTwoDescription;
// 						orgTwoLinkText.innerHTML = GA.stateGroupTwoTitle;
// 						orgTwoLink.href = GA.stateGroupTwoLink;
// 					}
// 					
// 					// Display Org Three - related to school age children
// 					if(result.state === 'GA' && result.school === 'yes' && result.ideology !== 'conservative') {
// 						orgThreeTitle.innerHTML = GA.school.yesSchoolGroupTitle;
// 						orgThreeDescription.innerHTML = GA.school.yesSchoolGroupDescription;
// 						orgThreeLinkText.innerHTML = GA.school.yesSchoolGroupTitle;
// 						orgThreeLink.href = GA.school.yesSchoolGroupLink;
// 					}
// 					
// 					// Display Org Four - related to ethnicity
// 					if(result.state === 'GA' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {
// 						orgFourTitle.innerHTML = GA.ethnicity.hispanicGroupTitle;
// 						orgFourDescription.innerHTML = GA.ethnicity.hispanicGroupDescription;
// 						orgFourLinkText.innerHTML = GA.ethnicity.hispanicGroupTitle;
// 						orgFourLink.href = GA.ethnicity.hispanicGroupLink;
// 					}
// 					else if(result.state === 'GA' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {
// 						orgFourTitle.innerHTML = GA.ethnicity.africanAmericanGroupTitle;
// 						orgFourDescription.innerHTML = GA.ethnicity.africanAmericanGroupDescription;
// 						orgFourLinkText.innerHTML = GA.ethnicity.africanAmericanGroupTitle;
// 						orgFourLink.href = GA.ethnicity.africanAmericanGroupLink;
// 					}
// 					
// 					// Display Org Five - related to faith
// 					if(result.state === 'GA' && result.faith === 'yes' && result.ideology !== 'conservative') {
// 						orgFiveTitle.innerHTML = GA.faith.yesFaithGroupTitle;
// 						orgFiveDescription.innerHTML = GA.faith.yesFaithGroupDescription;
// 						orgFiveLinkText.innerHTML = GA.faith.yesFaithGroupTitle;
// 						orgFiveLink.href = GA.faith.yesFaithGroupLink;
// 					}
// 					
// 				
// 					
// 					// Output org results for North Carolina
// 					// Display Org One - related to selected state 
// 					if(result.state === 'NC') {
// 						orgOneTitle.innerHTML = NC.stateGroupTitle;
// 						orgOneDescription.innerHTML = NC.stateGroupDescription;
// 						orgOneLinkText.innerHTML = NC.stateGroupTitle;
// 						orgOneLink.href = NC.stateGroupLink;
// 					}
// 					
// 					// Display Org Two - related to ideology
// 					if(result.state === 'NC' && result.ideology === 'conservative') {			
// 						// Pull data from NC object
// 						// Conservative answer also pulls in faith options to round out 5 groups
// 						orgOneTitle.innerHTML = NC.ideology.conservativeGroupTitle;
// 						orgOneDescription.innerHTML = NC.ideology.conservativeGroupDescription;
// 						orgOneLinkText.innerHTML = NC.ideology.conservativeGroupTitle;
// 						orgOneLink.href = NC.ideology.conservativeGroupLink;
// 						
// 						orgTwoTitle.innerHTML = NC.ideology.conservativeGroupTwoTitle;
// 						orgTwoDescription.innerHTML = NC.ideology.conservativeGroupTwoDescription;
// 						orgTwoLinkText.innerHTML = NC.ideology.conservativeGroupTwoTitle;
// 						orgTwoLink.href = NC.ideology.conservativeGroupTwoLink;
// 						
// 						orgThreeTitle.innerHTML = NC.faith.yesFaithGroupTitle;
// 						orgThreeDescription.innerHTML = NC.faith.yesFaithGroupDescription;
// 						orgThreeLinkText.innerHTML = NC.faith.yesFaithGroupTitle;
// 						orgThreeLink.href = NC.faith.yesFaithGroupLink;
// 						
// 						orgFourTitle.innerHTML = general.faith.faithGroupTwoTitle;
// 						orgFourDescription.innerHTML = general.faith.faithGroupTwoDescription;
// 						orgFourLinkText.innerHTML = general.faith.faithGroupTwoTitle;
// 						orgFourLink.href = general.faith.faithGroupTwoLink;
// 						
// 						orgFiveTitle.innerHTML = general.faith.faithGroupThreeTitle;
// 						orgFiveDescription.innerHTML = general.faith.faithGroupThreeDescription;
// 						orgFiveLinkText.innerHTML = general.faith.faithGroupThreeTitle;
// 						orgFiveLink.href = general.faith.faithGroupThreeLink;
// 					}
// 					else if(result.state === 'NC' && result.ideology === 'liberal') {
// 						orgTwoTitle.innerHTML = NC.ideology.liberalGroupTitle;
// 						orgTwoDescription.innerHTML = NC.ideology.liberalGroupDescription;
// 						orgTwoLinkText.innerHTML = NC.ideology.liberalGroupTitle;
// 						orgTwoLink.href = NC.ideology.liberalGroupLink;
// 						
// 						orgFiveTitle.innerHTML = NC.stateGroupTwoTitle;
// 						orgFiveDescription.innerHTML = NC.stateGroupTwoDescription;
// 						orgFiveLinkText.innerHTML = NC.stateGroupTwoTitle;
// 						orgFiveLink.href = NC.stateGroupTwoLink;
// 					}
// 					else if(result.state === 'NC' && result.ideology === 'moderate') {
// 						orgTwoTitle.innerHTML = NC.ideology.moderateGroupTitle;
// 						orgTwoDescription.innerHTML = NC.ideology.moderateGroupDescription;
// 						orgTwoLinkText.innerHTML = NC.ideology.moderateGroupTitle;
// 						orgTwoLink.href = NC.ideology.moderateGroupLink;
// 						
// 						orgFiveTitle.innerHTML = NC.stateGroupTwoTitle;
// 						orgFiveDescription.innerHTML = NC.stateGroupTwoDescription;
// 						orgFiveLinkText.innerHTML = NC.stateGroupTwoTitle;
// 						orgFiveLink.href = NC.stateGroupTwoLink;
// 					}
// 					else if(result.state === 'NC' && result.ideology === 'none') {
// 						orgTwoTitle.innerHTML = NC.stateGroupTwoTitle;
// 						orgTwoDescription.innerHTML = NC.stateGroupTwoDescription;
// 						orgTwoLinkText.innerHTML = NC.stateGroupTwoTitle;
// 						orgTwoLink.href = NC.stateGroupTwoLink;
// 					}
// 					
// 					// Display Org Three - related to school age children
// 					if(result.state === 'NC' && result.school === 'yes' && result.ideology !== 'conservative') {
// 						orgThreeTitle.innerHTML = NC.school.yesSchoolGroupTitle;
// 						orgThreeDescription.innerHTML = NC.school.yesSchoolGroupDescription;
// 						orgThreeLinkText.innerHTML = NC.school.yesSchoolGroupTitle;
// 						orgThreeLink.href = NC.school.yesSchoolGroupLink;
// 					}
// 					
// 					// Display Org Four - related to ethnicity
// 					if(result.state === 'NC' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {
// 						orgFourTitle.innerHTML = NC.ethnicity.hispanicGroupTitle;
// 						orgFourDescription.innerHTML = NC.ethnicity.hispanicGroupDescription;
// 						orgFourLinkText.innerHTML = NC.ethnicity.hispanicGroupTitle;
// 						orgFourLink.href = NC.ethnicity.hispanicGroupLink;
// 					}
// 					else if(result.state === 'NC' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {
// 						orgFourTitle.innerHTML = NC.ethnicity.africanAmericanGroupTitle;
// 						orgFourDescription.innerHTML = NC.ethnicity.africanAmericanGroupDescription;
// 						orgFourLinkText.innerHTML = NC.ethnicity.africanAmericanGroupTitle;
// 						orgFourLink.href = NC.ethnicity.africanAmericanGroupLink;
// 					}
// 					
// 					// Display Org Five - related to faith
// 					if(result.state === 'NC' && result.faith === 'yes' && result.ideology !== 'conservative') {
// 						orgFiveTitle.innerHTML = NC.faith.yesFaithGroupTitle;
// 						orgFiveDescription.innerHTML = NC.faith.yesFaithGroupDescription;
// 						orgFiveLinkText.innerHTML = NC.faith.yesFaithGroupTitle;
// 						orgFiveLink.href = NC.faith.yesFaithGroupLink;
// 					}
// 					
// 					
// 					
// 					// Output org results for Pennsylvania
// 					// Display Org One - related to selected state 
// 					if(result.state === 'PA') {
// 						orgOneTitle.innerHTML = PA.stateGroupTitle;
// 						orgOneDescription.innerHTML = PA.stateGroupDescription;
// 						orgOneLinkText.innerHTML = PA.stateGroupTitle;
// 						orgOneLink.href = PA.stateGroupLink;
// 					}
// 					
// 					// Display Org Two - related to ideology
// 					if(result.state === 'PA' && result.ideology === 'conservative') {			
// 						// Pull data from PA object
// 						// Conservative answer also pulls in faith options to round out 5 groups
// 						orgTwoTitle.innerHTML = PA.ideology.conservativeGroupTitle;
// 						orgTwoDescription.innerHTML = PA.ideology.conservativeGroupDescription;
// 						orgTwoLinkText.innerHTML = PA.ideology.conservativeGroupTitle;
// 						orgTwoLink.href = PA.ideology.conservativeGroupLink;
// 						
// 						orgThreeTitle.innerHTML = PA.faith.yesFaithGroupTitle;
// 						orgThreeDescription.innerHTML = PA.faith.yesFaithGroupDescription;
// 						orgThreeLinkText.innerHTML = PA.faith.yesFaithGroupTitle;
// 						orgThreeLink.href = PA.faith.yesFaithGroupLink;
// 						
// 						orgFourTitle.innerHTML = general.faith.faithGroupTwoTitle;
// 						orgFourDescription.innerHTML = general.faith.faithGroupTwoDescription;
// 						orgFourLinkText.innerHTML = general.faith.faithGroupTwoTitle;
// 						orgFourLink.href = general.faith.faithGroupTwoLink;
// 						
// 						orgFiveTitle.innerHTML = general.faith.faithGroupThreeTitle;
// 						orgFiveDescription.innerHTML = general.faith.faithGroupThreeDescription;
// 						orgFiveLinkText.innerHTML = general.faith.faithGroupThreeTitle;
// 						orgFiveLink.href = general.faith.faithGroupThreeLink;
// 					}
// 					else if(result.state === 'PA' && result.ideology === 'liberal') {
// 						orgTwoTitle.innerHTML = PA.ideology.liberalGroupTitle;
// 						orgTwoDescription.innerHTML = PA.ideology.liberalGroupDescription;
// 						orgTwoLinkText.innerHTML = PA.ideology.liberalGroupTitle;
// 						orgTwoLink.href = PA.ideology.liberalGroupLink;
// 						
// 						orgFiveTitle.innerHTML = PA.stateGroupTwoTitle;
// 						orgFiveDescription.innerHTML = PA.stateGroupTwoDescription;
// 						orgFiveLinkText.innerHTML = PA.stateGroupTwoTitle;
// 						orgFiveLink.href = PA.stateGroupTwoLink;
// 					}
// 					else if(result.state === 'PA' && result.ideology === 'moderate') {
// 						orgTwoTitle.innerHTML = PA.ideology.moderateGroupTitle;
// 						orgTwoDescription.innerHTML = PA.ideology.moderateGroupDescription;
// 						orgTwoLinkText.innerHTML = PA.ideology.moderateGroupTitle;
// 						orgTwoLink.href = PA.ideology.moderateGroupLink;
// 						
// 						orgFiveTitle.innerHTML = PA.stateGroupTwoTitle;
// 						orgFiveDescription.innerHTML = PA.stateGroupTwoDescription;
// 						orgFiveLinkText.innerHTML = PA.stateGroupTwoTitle;
// 						orgFiveLink.href = PA.stateGroupTwoLink;
// 					}
// 					else if(result.state === 'PA' && result.ideology === 'none') {
// 						orgTwoTitle.innerHTML = PA.stateGroupTwoTitle;
// 						orgTwoDescription.innerHTML = PA.stateGroupTwoDescription;
// 						orgTwoLinkText.innerHTML = PA.stateGroupTwoTitle;
// 						orgTwoLink.href = PA.stateGroupTwoLink;
// 					}
// 					
// 					// Display Org Three - related to school age children
// 					if(result.state === 'PA' && result.school === 'yes' && result.ideology !== 'conservative') {
// 						orgThreeTitle.innerHTML = PA.school.yesSchoolGroupTitle;
// 						orgThreeDescription.innerHTML = PA.school.yesSchoolGroupDescription;
// 						orgThreeLinkText.innerHTML = PA.school.yesSchoolGroupTitle;
// 						orgThreeLink.href = PA.school.yesSchoolGroupLink;
// 					}
// 					
// 					// Display Org Four - related to ethnicity
// 					if(result.state === 'PA' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {
// 						orgFourTitle.innerHTML = PA.ethnicity.hispanicGroupTitle;
// 						orgFourDescription.innerHTML = PA.ethnicity.hispanicGroupDescription;
// 						orgFourLinkText.innerHTML = PA.ethnicity.hispanicGroupTitle;
// 						orgFourLink.href = PA.ethnicity.hispanicGroupLink;
// 					}
// 					else if(result.state === 'PA' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {
// 						orgFourTitle.innerHTML = PA.ethnicity.africanAmericanGroupTitle;
// 						orgFourDescription.innerHTML = PA.ethnicity.africanAmericanGroupDescription;
// 						orgFourLinkText.innerHTML = PA.ethnicity.africanAmericanGroupTitle;
// 						orgFourLink.href = PA.ethnicity.africanAmericanGroupLink;
// 					}
// 					
// 					// Display Org Five - related to faith
// 					if(result.state === 'PA' && result.faith === 'yes' && result.ideology !== 'conservative') {
// 						orgFiveTitle.innerHTML = PA.faith.yesFaithGroupTitle;
// 						orgFiveDescription.innerHTML = PA.faith.yesFaithGroupDescription;
// 						orgFiveLinkText.innerHTML = PA.faith.yesFaithGroupTitle;
// 						orgFiveLink.href = PA.faith.yesFaithGroupLink;
// 					}
// 					
// 					
// 					// Output org results for Wisconsin
// 					// Display Org One - related to selected state 
// 					if(result.state === 'WI') {
// 						orgOneTitle.innerHTML = WI.stateGroupTitle;
// 						orgOneDescription.innerHTML = WI.stateGroupDescription;
// 						orgOneLinkText.innerHTML = WI.stateGroupTitle;
// 						orgOneLink.href = WI.stateGroupLink;
// 					}
// 					
// 					// Display Org Two - related to ideology
// 					if(result.state === 'WI' && result.ideology === 'conservative') {			
// 						// Pull data from WI object
// 						// Conservative answer also pulls in faith options to round out 5 groups
// 						orgTwoTitle.innerHTML = WI.ideology.conservativeGroupTitle;
// 						orgTwoDescription.innerHTML = WI.ideology.conservativeGroupDescription;
// 						orgTwoLinkText.innerHTML = WI.ideology.conservativeGroupTitle;
// 						orgTwoLink.href = WI.ideology.conservativeGroupLink;
// 						
// 						orgThreeTitle.innerHTML = WI.faith.yesFaithGroupTitle;
// 						orgThreeDescription.innerHTML = WI.faith.yesFaithGroupDescription;
// 						orgThreeLinkText.innerHTML = WI.faith.yesFaithGroupTitle;
// 						orgThreeLink.href = WI.faith.yesFaithGroupLink;
// 						
// 						orgFourTitle.innerHTML = general.faith.faithGroupTwoTitle;
// 						orgFourDescription.innerHTML = general.faith.faithGroupTwoDescription;
// 						orgFourLinkText.innerHTML = general.faith.faithGroupTwoTitle;
// 						orgFourLink.href = general.faith.faithGroupTwoLink;
// 						
// 						orgFiveTitle.innerHTML = general.faith.faithGroupThreeTitle;
// 						orgFiveDescription.innerHTML = general.faith.faithGroupThreeDescription;
// 						orgFiveLinkText.innerHTML = general.faith.faithGroupThreeTitle;
// 						orgFiveLink.href = general.faith.faithGroupThreeLink;
// 					}
// 					else if(result.state === 'WI' && result.ideology === 'liberal') {
// 						orgTwoTitle.innerHTML = WI.ideology.liberalGroupTitle;
// 						orgTwoDescription.innerHTML = WI.ideology.liberalGroupDescription;
// 						orgTwoLinkText.innerHTML = WI.ideology.liberalGroupTitle;
// 						orgTwoLink.href = WI.ideology.liberalGroupLink;
// 						
// 						orgFiveTitle.innerHTML = WI.stateGroupTwoTitle;
// 						orgFiveDescription.innerHTML = WI.stateGroupTwoDescription;
// 						orgFiveLinkText.innerHTML = WI.stateGroupTwoTitle;
// 						orgFiveLink.href = WI.stateGroupTwoLink;
// 					}
// 					else if(result.state === 'WI' && result.ideology === 'moderate') {
// 						orgTwoTitle.innerHTML = WI.ideology.moderateGroupTitle;
// 						orgTwoDescription.innerHTML = WI.ideology.moderateGroupDescription;
// 						orgTwoLinkText.innerHTML = WI.ideology.moderateGroupTitle;
// 						orgTwoLink.href = WI.ideology.moderateGroupLink;
// 						
// 						orgFiveTitle.innerHTML = WI.stateGroupTwoTitle;
// 						orgFiveDescription.innerHTML = WI.stateGroupTwoDescription;
// 						orgFiveLinkText.innerHTML = WI.stateGroupTwoTitle;
// 						orgFiveLink.href = WI.stateGroupTwoLink;
// 					}
// 					else if(result.state === 'WI' && result.ideology === 'none') {
// 						orgTwoTitle.innerHTML = WI.stateGroupTwoTitle;
// 						orgTwoDescription.innerHTML = WI.stateGroupTwoDescription;
// 						orgTwoLinkText.innerHTML = WI.stateGroupTwoTitle;
// 						orgTwoLink.href = WI.stateGroupTwoLink;
// 					}
// 					
// 					// Display Org Three - related to school age children
// 					if(result.state === 'WI' && result.school === 'yes' && result.ideology !== 'conservative') {
// 						orgThreeTitle.innerHTML = WI.school.yesSchoolGroupTitle;
// 						orgThreeDescription.innerHTML = WI.school.yesSchoolGroupDescription;
// 						orgThreeLinkText.innerHTML = WI.school.yesSchoolGroupTitle;
// 						orgThreeLink.href = WI.school.yesSchoolGroupLink;
// 					}
// 					
// 					// Display Org Four - related to ethnicity
// 					if(result.state === 'WI' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {
// 						orgFourTitle.innerHTML = WI.ethnicity.hispanicGroupTitle;
// 						orgFourDescription.innerHTML = WI.ethnicity.hispanicGroupDescription;
// 						orgFourLinkText.innerHTML = WI.ethnicity.hispanicGroupTitle;
// 						orgFourLink.href = WI.ethnicity.hispanicGroupLink;
// 					}
// 					else if(result.state === 'WI' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {
// 						orgFourTitle.innerHTML = WI.ethnicity.africanAmericanGroupTitle;
// 						orgFourDescription.innerHTML = WI.ethnicity.africanAmericanGroupDescription;
// 						orgFourLinkText.innerHTML = WI.ethnicity.africanAmericanGroupTitle;
// 						orgFourLink.href = WI.ethnicity.africanAmericanGroupLink;
// 					}
// 					
// 					// Display Org Five - related to faith
// 					if(result.state === 'WI' && result.faith === 'yes' && result.ideology !== 'conservative') {
// 						orgFiveTitle.innerHTML = WI.faith.yesFaithGroupTitle;
// 						orgFiveDescription.innerHTML = WI.faith.yesFaithGroupDescription;
// 						orgFiveLinkText.innerHTML = WI.faith.yesFaithGroupTitle;
// 						orgFiveLink.href = WI.faith.yesFaithGroupLink;
// 					}
// 					
// 				}
// 			}, 500);
// 		});
// 	}
// }, 1500);





// check if ngp-form element exists and if it does add click event to .at-submit element
// display results
setTimeout(() => {
	if(document.querySelector('.cta-capture-section .ngp-form')) {		
		document.querySelector('.cta-capture-section .at-submit').addEventListener('click', () => {		
			setTimeout(()=> {
				if(document.querySelector('.cta-capture-section .thankYou')) {
					//console.log('thankYou element exists');					
					const orgOneTitle = document.querySelector('.org-one-title');
					const orgOneDescription = document.querySelector('.org-one-description');
					const orgOneLink = document.querySelector('.org-one-link');
					const orgOneLinkText = document.querySelector('.org-one-link-text');
					
					const orgTwoTitle = document.querySelector('.org-two-title');
					const orgTwoDescription = document.querySelector('.org-two-description');
					const orgTwoLink = document.querySelector('.org-two-link');
					const orgTwoLinkText = document.querySelector('.org-two-link-text');
					
					const orgThreeTitle = document.querySelector('.org-three-title');
					const orgThreeDescription = document.querySelector('.org-three-description');
					const orgThreeLink = document.querySelector('.org-three-link');
					const orgThreeLinkText = document.querySelector('.org-three-link-text');
					
					const orgFourTitle = document.querySelector('.org-four-title');
					const orgFourDescription = document.querySelector('.org-four-description');
					const orgFourLink = document.querySelector('.org-four-link');
					const orgFourLinkText = document.querySelector('.org-four-link-text');
					
					const orgFiveTitle = document.querySelector('.org-five-title');
					const orgFiveDescription = document.querySelector('.org-five-description');
					const orgFiveLink = document.querySelector('.org-five-link');
					const orgFiveLinkText = document.querySelector('.org-five-link-text');
					
					// Display org results
					quizSection.scrollIntoView({behavior: "smooth", block: "start"});
					quizSection.style.backgroundColor = '#fcd8bb';
					ctaCaptureSection.classList.add('hidden');
					thanksMessage.classList.remove('hidden');
					orgs.classList.remove('hidden');
					takeActionMessage.classList.remove('hidden');
					
					// Output org results for states that have no state option (Results are pulled from the general object)
					// Display Org One - related to ideology
					if(result.state === 'none' && result.ideology === 'conservative') {			
						// Pull data from general object
						orgOneTitle.innerHTML = general.ideology.conservativeGroupTitle;
						orgOneDescription.innerHTML = general.ideology.conservativeGroupDescription;
						orgOneLinkText.innerHTML = general.ideology.conservativeGroupTitle;
						orgOneLink.href = general.ideology.conservativeGroupLink;
						
						orgTwoTitle.innerHTML = general.faith.faithGroupOneTitle;
						orgTwoDescription.innerHTML = general.faith.faithGroupOneDescription;
						orgTwoLinkText.innerHTML = general.faith.faithGroupOneTitle;
						orgTwoLink.href = general.faith.faithGroupOneLink;
						
						orgThreeTitle.innerHTML = general.faith.faithGroupTwoTitle;
						orgThreeDescription.innerHTML = general.faith.faithGroupTwoDescription;
						orgThreeLinkText.innerHTML = general.faith.faithGroupTwoTitle;
						orgThreeLink.href = general.faith.faithGroupTwoLink;
						
						orgFourTitle.innerHTML = general.faith.faithGroupThreeTitle;
						orgFourDescription.innerHTML = general.faith.faithGroupThreeDescription;
						orgFourLinkText.innerHTML = general.faith.faithGroupThreeTitle;
						orgFourLink.href = general.faith.faithGroupThreeLink;
						
						orgFiveTitle.innerHTML = general.ideology.moderateGroupTitle;
						orgFiveDescription.innerHTML = general.ideology.moderateGroupDescription;
						orgFiveLinkText.innerHTML = general.ideology.moderateGroupTitle;
						orgFiveLink.href = general.ideology.moderateGroupLink;
					}
					else if(result.state === 'none' && result.ideology === 'liberal') {
						orgOneTitle.innerHTML = general.ideology.liberalGroupTitle;
						orgOneDescription.innerHTML = general.ideology.liberalGroupDescription;
						orgOneLinkText.innerHTML = general.ideology.liberalGroupTitle;
						orgOneLink.href = general.ideology.liberalGroupLink;
					}
					else if(result.state === 'none' && result.ideology === 'moderate') {
						orgOneTitle.innerHTML = general.ideology.moderateGroupTitle;
						orgOneDescription.innerHTML = general.ideology.moderateGroupDescription;
						orgOneLinkText.innerHTML = general.ideology.moderateGroupTitle;
						orgOneLink.href = general.ideology.moderateGroupLink;
					}
					
					// Display Org Two - No state option - conservative ideology - faith option is yes
					if(result.state === 'none' && result.ideology === 'conservative' && result.faith === 'yes') {			
						// Pull data from general object
						orgTwoTitle.innerHTML = general.faith.faithGroupOneTitle;
						orgTwoDescription.innerHTML = general.faith.faithGroupOneDescription;
						orgTwoLinkText.innerHTML = general.faith.faithGroupOneTitle;
						orgTwoLink.href = general.faith.faithGroupOneLink;
					}
					
					// Display Org Three - No state option - school age kids option is yes
					if(result.state === 'none' && result.school === 'yes' && result.ideology !== 'conservative') {			
						// Pull data from general object
						orgThreeTitle.innerHTML = general.school.yesSchoolGroupTitle;
						orgThreeDescription.innerHTML = general.school.yesSchoolGroupDescription;
						orgThreeLinkText.innerHTML = general.school.yesSchoolGroupTitle;
						orgThreeLink.href = general.school.yesSchoolGroupLink;
					}
					
					// Display Org Four - No state option - related to ethnicity
					if(result.state === 'none' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {			
						// Pull data from general object
						orgFourTitle.innerHTML = general.ethnicity.hispanicGroupTitle;
						orgFourDescription.innerHTML = general.ethnicity.hispanicGroupDescription;
						orgFourLinkText.innerHTML = general.ethnicity.hispanicGroupTitle;
						orgFourLink.href = general.ethnicity.hispanicGroupLink;
					}
					else if(result.state === 'none' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {			
						// Pull data from general object
						orgFourTitle.innerHTML = general.ethnicity.africanAmericanGroupTitle;
						orgFourDescription.innerHTML = general.ethnicity.africanAmericanGroupDescription;
						orgFourLinkText.innerHTML = general.ethnicity.africanAmericanGroupTitle;
						orgFourLink.href = general.ethnicity.africanAmericanGroupLink;
					}
					
					// Display Org Five - No state option - related to faith
					if(result.state === 'none' && result.faith === 'yes' && result.ideology !== 'conservative' && result.ideology !== 'none') {
						// Pull data from general object
						orgFiveTitle.innerHTML = general.faith.faithGroupOneTitle;
						orgFiveDescription.innerHTML = general.faith.faithGroupOneDescription;
						orgFiveLinkText.innerHTML = general.faith.faithGroupOneTitle;
						orgFiveLink.href = general.faith.faithGroupOneLink;
					}
					
					// Faith only orgs displayed if faith is only choice selected, rest will be filled with default choices
					if(result.state === 'none' && result.ideology === 'none' && result.ethnicity === 'none' && result.school === 'no' && result.faith === 'yes') {			
						// Pull data from general object
						// Org One
						orgOneTitle.innerHTML = general.faith.faithGroupOneTitle;
						orgOneDescription.innerHTML = general.faith.faithGroupOneDescription;
						orgOneLinkText.innerHTML = general.faith.faithGroupOneTitle;
						orgOneLink.href = general.faith.faithGroupOneLink;
						
						// Org Two
						orgTwoTitle.innerHTML = general.faith.faithGroupTwoTitle;
						orgTwoDescription.innerHTML = general.faith.faithGroupTwoDescription;
						orgTwoLinkText.innerHTML = general.faith.faithGroupTwoTitle;
						orgTwoLink.href = general.faith.faithGroupTwoLink;
						
						// Org Three
						orgThreeTitle.innerHTML = general.faith.faithGroupThreeTitle;
						orgThreeDescription.innerHTML = general.faith.faithGroupThreeDescription;
						orgThreeLinkText.innerHTML = general.faith.faithGroupThreeTitle;
						orgThreeLink.href = general.faith.faithGroupThreeLink;
					}
					else if(result.state === 'none' && result.ideology === 'none' && result.ethnicity === 'none' && result.school === '' && result.faith === 'yes') {			
						// Pull data from general object
						// Org One
						orgOneTitle.innerHTML = general.faith.faithGroupOneTitle;
						orgOneDescription.innerHTML = general.faith.faithGroupOneDescription;
						orgOneLinkText.innerHTML = general.faith.faithGroupOneTitle;
						orgOneLink.href = general.faith.faithGroupOneLink;
						
						// Org Two
						orgTwoTitle.innerHTML = general.faith.faithGroupTwoTitle;
						orgTwoDescription.innerHTML = general.faith.faithGroupTwoDescription;
						orgTwoLinkText.innerHTML = general.faith.faithGroupTwoTitle;
						orgTwoLink.href = general.faith.faithGroupTwoLink;
						
						// Org Three
						orgThreeTitle.innerHTML = general.faith.faithGroupThreeTitle;
						orgThreeDescription.innerHTML = general.faith.faithGroupThreeDescription;
						orgThreeLinkText.innerHTML = general.faith.faithGroupThreeTitle;
						orgThreeLink.href = general.faith.faithGroupThreeLink;
					}
					
					// Conservative only orgs displayed, rest will be filled with default choices - TBA
					
					// Output org results for Arizona
					// Display Org One - related to selected state 
					if(result.state === 'AZ') {
						orgOneTitle.innerHTML = AZ.stateGroupTitle;
						orgOneDescription.innerHTML = AZ.stateGroupDescription;
						orgOneLinkText.innerHTML = AZ.stateGroupTitle;
						orgOneLink.href = AZ.stateGroupLink;
					}
					
					// Display Org Two - related to ideology
					if(result.state === 'AZ' && result.ideology === 'conservative') {			
						// Pull data from AZ object
						// Conservative answer also pulls in faith options to round out 5 groups
						orgTwoTitle.innerHTML = AZ.ideology.conservativeGroupTitle;
						orgTwoDescription.innerHTML = AZ.ideology.conservativeGroupDescription;
						orgTwoLinkText.innerHTML = AZ.ideology.conservativeGroupTitle;
						orgTwoLink.href = AZ.ideology.conservativeGroupLink;
						
						orgThreeTitle.innerHTML = AZ.faith.yesFaithGroupTitle;
						orgThreeDescription.innerHTML = AZ.faith.yesFaithGroupDescription;
						orgThreeLinkText.innerHTML = AZ.faith.yesFaithGroupTitle;
						orgThreeLink.href = AZ.faith.yesFaithGroupLink;
						
						orgFourTitle.innerHTML = general.faith.faithGroupTwoTitle;
						orgFourDescription.innerHTML = general.faith.faithGroupTwoDescription;
						orgFourLinkText.innerHTML = general.faith.faithGroupTwoTitle;
						orgFourLink.href = general.faith.faithGroupTwoLink;
						
						orgFiveTitle.innerHTML = general.faith.faithGroupThreeTitle;
						orgFiveDescription.innerHTML = general.faith.faithGroupThreeDescription;
						orgFiveLinkText.innerHTML = general.faith.faithGroupThreeTitle;
						orgFiveLink.href = general.faith.faithGroupThreeLink;
					}
					else if(result.state === 'AZ' && result.ideology === 'liberal') {
						orgTwoTitle.innerHTML = AZ.ideology.liberalGroupTitle;
						orgTwoDescription.innerHTML = AZ.ideology.liberalGroupDescription;
						orgTwoLinkText.innerHTML = AZ.ideology.liberalGroupTitle;
						orgTwoLink.href = AZ.ideology.liberalGroupLink;
						
						orgFiveTitle.innerHTML = AZ.stateGroupTwoTitle;
						orgFiveDescription.innerHTML = AZ.stateGroupTwoDescription;
						orgFiveLinkText.innerHTML = AZ.stateGroupTwoTitle;
						orgFiveLink.href = AZ.stateGroupTwoLink;
					}
					else if(result.state === 'AZ' && result.ideology === 'moderate') {
						orgTwoTitle.innerHTML = AZ.ideology.moderateGroupTitle;
						orgTwoDescription.innerHTML = AZ.ideology.moderateGroupDescription;
						orgTwoLinkText.innerHTML = AZ.ideology.moderateGroupTitle;
						orgTwoLink.href = AZ.ideology.moderateGroupLink;
						
						orgFiveTitle.innerHTML = AZ.stateGroupTwoTitle;
						orgFiveDescription.innerHTML = AZ.stateGroupTwoDescription;
						orgFiveLinkText.innerHTML = AZ.stateGroupTwoTitle;
						orgFiveLink.href = AZ.stateGroupTwoLink;
					}
					else if(result.state === 'AZ' && result.ideology === 'none') {
						orgTwoTitle.innerHTML = AZ.stateGroupTwoTitle;
						orgTwoDescription.innerHTML = AZ.stateGroupTwoDescription;
						orgTwoLinkText.innerHTML = AZ.stateGroupTwoTitle;
						orgTwoLink.href = AZ.stateGroupTwoLink;
					}
					
					// Display Org Three - related to school age children & not conservative ideology
					if(result.state === 'AZ' && result.school === 'yes' && result.ideology !== 'conservative') {
						orgThreeTitle.innerHTML = AZ.school.yesSchoolGroupTitle;
						orgThreeDescription.innerHTML = AZ.school.yesSchoolGroupDescription;
						orgThreeLinkText.innerHTML = AZ.school.yesSchoolGroupTitle;
						orgThreeLink.href = AZ.school.yesSchoolGroupLink;
					}
					
					// Display Org Four - related to ethnicity & not conservative ideology
					if(result.state === 'AZ' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {
						orgFourTitle.innerHTML = AZ.ethnicity.hispanicGroupTitle;
						orgFourDescription.innerHTML = AZ.ethnicity.hispanicGroupDescription;
						orgFourLinkText.innerHTML = AZ.ethnicity.hispanicGroupTitle;
						orgFourLink.href = AZ.ethnicity.hispanicGroupLink;
					}
					else if(result.state === 'AZ' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {
						orgFourTitle.innerHTML = AZ.ethnicity.africanAmericanGroupTitle;
						orgFourDescription.innerHTML = AZ.ethnicity.africanAmericanGroupDescription;
						orgFourLinkText.innerHTML = AZ.ethnicity.africanAmericanGroupTitle;
						orgFourLink.href = AZ.ethnicity.africanAmericanGroupLink;
					}
					
					// Display Org Five - related to faith & not conservative ideology
					if(result.state === 'AZ' && result.faith === 'yes' && result.ideology !== 'conservative') {
						orgFiveTitle.innerHTML = AZ.faith.yesFaithGroupTitle;
						orgFiveDescription.innerHTML = AZ.faith.yesFaithGroupDescription;
						orgFiveLinkText.innerHTML = AZ.faith.yesFaithGroupTitle;
						orgFiveLink.href = AZ.faith.yesFaithGroupLink;
					}
					
					
					
					// Output org results for Georgia
					// Display Org One - related to selected state 
					if(result.state === 'GA' && result.ideology !== 'conservative') {
						orgOneTitle.innerHTML = GA.stateGroupTitle;
						orgOneDescription.innerHTML = GA.stateGroupDescription;
						orgOneLinkText.innerHTML = GA.stateGroupTitle;
						orgOneLink.href = GA.stateGroupLink;
					}
					
					// Display Org Two - related to ideology
					if(result.state === 'GA' && result.ideology === 'conservative') {			
						// Pull data from GA object
						// Conservative answer also pulls in faith options to round out 5 groups
						orgOneTitle.innerHTML = GA.ideology.conservativeGroupTitle;
						orgOneDescription.innerHTML = GA.ideology.conservativeGroupDescription;
						orgOneLinkText.innerHTML = GA.ideology.conservativeGroupTitle;
						orgOneLink.href = GA.ideology.conservativeGroupLink;
						
						orgTwoTitle.innerHTML = GA.ideology.conservativeGroupTwoTitle;
						orgTwoDescription.innerHTML = GA.ideology.conservativeGroupTwoDescription;
						orgTwoLinkText.innerHTML = GA.ideology.conservativeGroupTwoTitle;
						orgTwoLink.href = GA.ideology.conservativeGroupTwoLink;
						
						orgThreeTitle.innerHTML = GA.faith.yesFaithGroupTitle;
						orgThreeDescription.innerHTML = GA.faith.yesFaithGroupDescription;
						orgThreeLinkText.innerHTML = GA.faith.yesFaithGroupTitle;
						orgThreeLink.href = GA.faith.yesFaithGroupLink;
						
						orgFourTitle.innerHTML = general.faith.faithGroupTwoTitle;
						orgFourDescription.innerHTML = general.faith.faithGroupTwoDescription;
						orgFourLinkText.innerHTML = general.faith.faithGroupTwoTitle;
						orgFourLink.href = general.faith.faithGroupTwoLink;
						
						orgFiveTitle.innerHTML = general.faith.faithGroupThreeTitle;
						orgFiveDescription.innerHTML = general.faith.faithGroupThreeDescription;
						orgFiveLinkText.innerHTML = general.faith.faithGroupThreeTitle;
						orgFiveLink.href = general.faith.faithGroupThreeLink;
					}
					else if(result.state === 'GA' && result.ideology === 'liberal') {
						orgTwoTitle.innerHTML = GA.ideology.liberalGroupTitle;
						orgTwoDescription.innerHTML = GA.ideology.liberalGroupDescription;
						orgTwoLinkText.innerHTML = GA.ideology.liberalGroupTitle;
						orgTwoLink.href = GA.ideology.liberalGroupLink;
						
						orgFiveTitle.innerHTML = GA.stateGroupTwoTitle;
						orgFiveDescription.innerHTML = GA.stateGroupTwoDescription;
						orgFiveLinkText.innerHTML = GA.stateGroupTwoTitle;
						orgFiveLink.href = GA.stateGroupTwoLink;
					}
					else if(result.state === 'GA' && result.ideology === 'moderate') {
						orgTwoTitle.innerHTML = GA.ideology.moderateGroupTitle;
						orgTwoDescription.innerHTML = GA.ideology.moderateGroupDescription;
						orgTwoLinkText.innerHTML = GA.ideology.moderateGroupTitle;
						orgTwoLink.href = GA.ideology.moderateGroupLink;
						
						orgFiveTitle.innerHTML = GA.stateGroupTwoTitle;
						orgFiveDescription.innerHTML = GA.stateGroupTwoDescription;
						orgFiveLinkText.innerHTML = GA.stateGroupTwoTitle;
						orgFiveLink.href = GA.stateGroupTwoLink;
					}
					else if(result.state === 'GA' && result.ideology === 'none') {
						orgTwoTitle.innerHTML = GA.stateGroupTwoTitle;
						orgTwoDescription.innerHTML = GA.stateGroupTwoDescription;
						orgTwoLinkText.innerHTML = GA.stateGroupTwoTitle;
						orgTwoLink.href = GA.stateGroupTwoLink;
					}
					
					// Display Org Three - related to school age children
					if(result.state === 'GA' && result.school === 'yes' && result.ideology !== 'conservative') {
						orgThreeTitle.innerHTML = GA.school.yesSchoolGroupTitle;
						orgThreeDescription.innerHTML = GA.school.yesSchoolGroupDescription;
						orgThreeLinkText.innerHTML = GA.school.yesSchoolGroupTitle;
						orgThreeLink.href = GA.school.yesSchoolGroupLink;
					}
					
					// Display Org Four - related to ethnicity
					if(result.state === 'GA' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {
						orgFourTitle.innerHTML = GA.ethnicity.hispanicGroupTitle;
						orgFourDescription.innerHTML = GA.ethnicity.hispanicGroupDescription;
						orgFourLinkText.innerHTML = GA.ethnicity.hispanicGroupTitle;
						orgFourLink.href = GA.ethnicity.hispanicGroupLink;
					}
					else if(result.state === 'GA' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {
						orgFourTitle.innerHTML = GA.ethnicity.africanAmericanGroupTitle;
						orgFourDescription.innerHTML = GA.ethnicity.africanAmericanGroupDescription;
						orgFourLinkText.innerHTML = GA.ethnicity.africanAmericanGroupTitle;
						orgFourLink.href = GA.ethnicity.africanAmericanGroupLink;
					}
					
					// Display Org Five - related to faith
					if(result.state === 'GA' && result.faith === 'yes' && result.ideology !== 'conservative') {
						orgFiveTitle.innerHTML = GA.faith.yesFaithGroupTitle;
						orgFiveDescription.innerHTML = GA.faith.yesFaithGroupDescription;
						orgFiveLinkText.innerHTML = GA.faith.yesFaithGroupTitle;
						orgFiveLink.href = GA.faith.yesFaithGroupLink;
					}
					
				
					
					// Output org results for North Carolina
					// Display Org One - related to selected state 
					if(result.state === 'NC') {
						orgOneTitle.innerHTML = NC.stateGroupTitle;
						orgOneDescription.innerHTML = NC.stateGroupDescription;
						orgOneLinkText.innerHTML = NC.stateGroupTitle;
						orgOneLink.href = NC.stateGroupLink;
					}
					
					// Display Org Two - related to ideology
					if(result.state === 'NC' && result.ideology === 'conservative') {			
						// Pull data from NC object
						// Conservative answer also pulls in faith options to round out 5 groups
						orgOneTitle.innerHTML = NC.ideology.conservativeGroupTitle;
						orgOneDescription.innerHTML = NC.ideology.conservativeGroupDescription;
						orgOneLinkText.innerHTML = NC.ideology.conservativeGroupTitle;
						orgOneLink.href = NC.ideology.conservativeGroupLink;
						
						orgTwoTitle.innerHTML = NC.ideology.conservativeGroupTwoTitle;
						orgTwoDescription.innerHTML = NC.ideology.conservativeGroupTwoDescription;
						orgTwoLinkText.innerHTML = NC.ideology.conservativeGroupTwoTitle;
						orgTwoLink.href = NC.ideology.conservativeGroupTwoLink;
						
						orgThreeTitle.innerHTML = NC.faith.yesFaithGroupTitle;
						orgThreeDescription.innerHTML = NC.faith.yesFaithGroupDescription;
						orgThreeLinkText.innerHTML = NC.faith.yesFaithGroupTitle;
						orgThreeLink.href = NC.faith.yesFaithGroupLink;
						
						orgFourTitle.innerHTML = general.faith.faithGroupTwoTitle;
						orgFourDescription.innerHTML = general.faith.faithGroupTwoDescription;
						orgFourLinkText.innerHTML = general.faith.faithGroupTwoTitle;
						orgFourLink.href = general.faith.faithGroupTwoLink;
						
						orgFiveTitle.innerHTML = general.faith.faithGroupThreeTitle;
						orgFiveDescription.innerHTML = general.faith.faithGroupThreeDescription;
						orgFiveLinkText.innerHTML = general.faith.faithGroupThreeTitle;
						orgFiveLink.href = general.faith.faithGroupThreeLink;
					}
					else if(result.state === 'NC' && result.ideology === 'liberal') {
						orgTwoTitle.innerHTML = NC.ideology.liberalGroupTitle;
						orgTwoDescription.innerHTML = NC.ideology.liberalGroupDescription;
						orgTwoLinkText.innerHTML = NC.ideology.liberalGroupTitle;
						orgTwoLink.href = NC.ideology.liberalGroupLink;
						
						orgFiveTitle.innerHTML = NC.stateGroupTwoTitle;
						orgFiveDescription.innerHTML = NC.stateGroupTwoDescription;
						orgFiveLinkText.innerHTML = NC.stateGroupTwoTitle;
						orgFiveLink.href = NC.stateGroupTwoLink;
					}
					else if(result.state === 'NC' && result.ideology === 'moderate') {
						orgTwoTitle.innerHTML = NC.ideology.moderateGroupTitle;
						orgTwoDescription.innerHTML = NC.ideology.moderateGroupDescription;
						orgTwoLinkText.innerHTML = NC.ideology.moderateGroupTitle;
						orgTwoLink.href = NC.ideology.moderateGroupLink;
						
						orgFiveTitle.innerHTML = NC.stateGroupTwoTitle;
						orgFiveDescription.innerHTML = NC.stateGroupTwoDescription;
						orgFiveLinkText.innerHTML = NC.stateGroupTwoTitle;
						orgFiveLink.href = NC.stateGroupTwoLink;
					}
					else if(result.state === 'NC' && result.ideology === 'none') {
						orgTwoTitle.innerHTML = NC.stateGroupTwoTitle;
						orgTwoDescription.innerHTML = NC.stateGroupTwoDescription;
						orgTwoLinkText.innerHTML = NC.stateGroupTwoTitle;
						orgTwoLink.href = NC.stateGroupTwoLink;
					}
					
					// Display Org Three - related to school age children
					if(result.state === 'NC' && result.school === 'yes' && result.ideology !== 'conservative') {
						orgThreeTitle.innerHTML = NC.school.yesSchoolGroupTitle;
						orgThreeDescription.innerHTML = NC.school.yesSchoolGroupDescription;
						orgThreeLinkText.innerHTML = NC.school.yesSchoolGroupTitle;
						orgThreeLink.href = NC.school.yesSchoolGroupLink;
					}
					
					// Display Org Four - related to ethnicity
					if(result.state === 'NC' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {
						orgFourTitle.innerHTML = NC.ethnicity.hispanicGroupTitle;
						orgFourDescription.innerHTML = NC.ethnicity.hispanicGroupDescription;
						orgFourLinkText.innerHTML = NC.ethnicity.hispanicGroupTitle;
						orgFourLink.href = NC.ethnicity.hispanicGroupLink;
					}
					else if(result.state === 'NC' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {
						orgFourTitle.innerHTML = NC.ethnicity.africanAmericanGroupTitle;
						orgFourDescription.innerHTML = NC.ethnicity.africanAmericanGroupDescription;
						orgFourLinkText.innerHTML = NC.ethnicity.africanAmericanGroupTitle;
						orgFourLink.href = NC.ethnicity.africanAmericanGroupLink;
					}
					
					// Display Org Five - related to faith
					if(result.state === 'NC' && result.faith === 'yes' && result.ideology !== 'conservative') {
						orgFiveTitle.innerHTML = NC.faith.yesFaithGroupTitle;
						orgFiveDescription.innerHTML = NC.faith.yesFaithGroupDescription;
						orgFiveLinkText.innerHTML = NC.faith.yesFaithGroupTitle;
						orgFiveLink.href = NC.faith.yesFaithGroupLink;
					}
					
					
					
					// Output org results for Pennsylvania
					// Display Org One - related to selected state 
					if(result.state === 'PA') {
						orgOneTitle.innerHTML = PA.stateGroupTitle;
						orgOneDescription.innerHTML = PA.stateGroupDescription;
						orgOneLinkText.innerHTML = PA.stateGroupTitle;
						orgOneLink.href = PA.stateGroupLink;
					}
					
					// Display Org Two - related to ideology
					if(result.state === 'PA' && result.ideology === 'conservative') {			
						// Pull data from PA object
						// Conservative answer also pulls in faith options to round out 5 groups
						orgTwoTitle.innerHTML = PA.ideology.conservativeGroupTitle;
						orgTwoDescription.innerHTML = PA.ideology.conservativeGroupDescription;
						orgTwoLinkText.innerHTML = PA.ideology.conservativeGroupTitle;
						orgTwoLink.href = PA.ideology.conservativeGroupLink;
						
						orgThreeTitle.innerHTML = PA.faith.yesFaithGroupTitle;
						orgThreeDescription.innerHTML = PA.faith.yesFaithGroupDescription;
						orgThreeLinkText.innerHTML = PA.faith.yesFaithGroupTitle;
						orgThreeLink.href = PA.faith.yesFaithGroupLink;
						
						orgFourTitle.innerHTML = general.faith.faithGroupTwoTitle;
						orgFourDescription.innerHTML = general.faith.faithGroupTwoDescription;
						orgFourLinkText.innerHTML = general.faith.faithGroupTwoTitle;
						orgFourLink.href = general.faith.faithGroupTwoLink;
						
						orgFiveTitle.innerHTML = general.faith.faithGroupThreeTitle;
						orgFiveDescription.innerHTML = general.faith.faithGroupThreeDescription;
						orgFiveLinkText.innerHTML = general.faith.faithGroupThreeTitle;
						orgFiveLink.href = general.faith.faithGroupThreeLink;
					}
					else if(result.state === 'PA' && result.ideology === 'liberal') {
						orgTwoTitle.innerHTML = PA.ideology.liberalGroupTitle;
						orgTwoDescription.innerHTML = PA.ideology.liberalGroupDescription;
						orgTwoLinkText.innerHTML = PA.ideology.liberalGroupTitle;
						orgTwoLink.href = PA.ideology.liberalGroupLink;
						
						orgFiveTitle.innerHTML = PA.stateGroupTwoTitle;
						orgFiveDescription.innerHTML = PA.stateGroupTwoDescription;
						orgFiveLinkText.innerHTML = PA.stateGroupTwoTitle;
						orgFiveLink.href = PA.stateGroupTwoLink;
					}
					else if(result.state === 'PA' && result.ideology === 'moderate') {
						orgTwoTitle.innerHTML = PA.ideology.moderateGroupTitle;
						orgTwoDescription.innerHTML = PA.ideology.moderateGroupDescription;
						orgTwoLinkText.innerHTML = PA.ideology.moderateGroupTitle;
						orgTwoLink.href = PA.ideology.moderateGroupLink;
						
						orgFiveTitle.innerHTML = PA.stateGroupTwoTitle;
						orgFiveDescription.innerHTML = PA.stateGroupTwoDescription;
						orgFiveLinkText.innerHTML = PA.stateGroupTwoTitle;
						orgFiveLink.href = PA.stateGroupTwoLink;
					}
					else if(result.state === 'PA' && result.ideology === 'none') {
						orgTwoTitle.innerHTML = PA.stateGroupTwoTitle;
						orgTwoDescription.innerHTML = PA.stateGroupTwoDescription;
						orgTwoLinkText.innerHTML = PA.stateGroupTwoTitle;
						orgTwoLink.href = PA.stateGroupTwoLink;
					}
					
					// Display Org Three - related to school age children
					if(result.state === 'PA' && result.school === 'yes' && result.ideology !== 'conservative') {
						orgThreeTitle.innerHTML = PA.school.yesSchoolGroupTitle;
						orgThreeDescription.innerHTML = PA.school.yesSchoolGroupDescription;
						orgThreeLinkText.innerHTML = PA.school.yesSchoolGroupTitle;
						orgThreeLink.href = PA.school.yesSchoolGroupLink;
					}
					
					// Display Org Four - related to ethnicity
					if(result.state === 'PA' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {
						orgFourTitle.innerHTML = PA.ethnicity.hispanicGroupTitle;
						orgFourDescription.innerHTML = PA.ethnicity.hispanicGroupDescription;
						orgFourLinkText.innerHTML = PA.ethnicity.hispanicGroupTitle;
						orgFourLink.href = PA.ethnicity.hispanicGroupLink;
					}
					else if(result.state === 'PA' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {
						orgFourTitle.innerHTML = PA.ethnicity.africanAmericanGroupTitle;
						orgFourDescription.innerHTML = PA.ethnicity.africanAmericanGroupDescription;
						orgFourLinkText.innerHTML = PA.ethnicity.africanAmericanGroupTitle;
						orgFourLink.href = PA.ethnicity.africanAmericanGroupLink;
					}
					
					// Display Org Five - related to faith
					if(result.state === 'PA' && result.faith === 'yes' && result.ideology !== 'conservative') {
						orgFiveTitle.innerHTML = PA.faith.yesFaithGroupTitle;
						orgFiveDescription.innerHTML = PA.faith.yesFaithGroupDescription;
						orgFiveLinkText.innerHTML = PA.faith.yesFaithGroupTitle;
						orgFiveLink.href = PA.faith.yesFaithGroupLink;
					}
					
					
					// Output org results for Wisconsin
					// Display Org One - related to selected state 
					if(result.state === 'WI') {
						orgOneTitle.innerHTML = WI.stateGroupTitle;
						orgOneDescription.innerHTML = WI.stateGroupDescription;
						orgOneLinkText.innerHTML = WI.stateGroupTitle;
						orgOneLink.href = WI.stateGroupLink;
					}
					
					// Display Org Two - related to ideology
					if(result.state === 'WI' && result.ideology === 'conservative') {			
						// Pull data from WI object
						// Conservative answer also pulls in faith options to round out 5 groups
						orgTwoTitle.innerHTML = WI.ideology.conservativeGroupTitle;
						orgTwoDescription.innerHTML = WI.ideology.conservativeGroupDescription;
						orgTwoLinkText.innerHTML = WI.ideology.conservativeGroupTitle;
						orgTwoLink.href = WI.ideology.conservativeGroupLink;
						
						orgThreeTitle.innerHTML = WI.faith.yesFaithGroupTitle;
						orgThreeDescription.innerHTML = WI.faith.yesFaithGroupDescription;
						orgThreeLinkText.innerHTML = WI.faith.yesFaithGroupTitle;
						orgThreeLink.href = WI.faith.yesFaithGroupLink;
						
						orgFourTitle.innerHTML = general.faith.faithGroupTwoTitle;
						orgFourDescription.innerHTML = general.faith.faithGroupTwoDescription;
						orgFourLinkText.innerHTML = general.faith.faithGroupTwoTitle;
						orgFourLink.href = general.faith.faithGroupTwoLink;
						
						orgFiveTitle.innerHTML = general.faith.faithGroupThreeTitle;
						orgFiveDescription.innerHTML = general.faith.faithGroupThreeDescription;
						orgFiveLinkText.innerHTML = general.faith.faithGroupThreeTitle;
						orgFiveLink.href = general.faith.faithGroupThreeLink;
					}
					else if(result.state === 'WI' && result.ideology === 'liberal') {
						orgTwoTitle.innerHTML = WI.ideology.liberalGroupTitle;
						orgTwoDescription.innerHTML = WI.ideology.liberalGroupDescription;
						orgTwoLinkText.innerHTML = WI.ideology.liberalGroupTitle;
						orgTwoLink.href = WI.ideology.liberalGroupLink;
						
						orgFiveTitle.innerHTML = WI.stateGroupTwoTitle;
						orgFiveDescription.innerHTML = WI.stateGroupTwoDescription;
						orgFiveLinkText.innerHTML = WI.stateGroupTwoTitle;
						orgFiveLink.href = WI.stateGroupTwoLink;
					}
					else if(result.state === 'WI' && result.ideology === 'moderate') {
						orgTwoTitle.innerHTML = WI.ideology.moderateGroupTitle;
						orgTwoDescription.innerHTML = WI.ideology.moderateGroupDescription;
						orgTwoLinkText.innerHTML = WI.ideology.moderateGroupTitle;
						orgTwoLink.href = WI.ideology.moderateGroupLink;
						
						orgFiveTitle.innerHTML = WI.stateGroupTwoTitle;
						orgFiveDescription.innerHTML = WI.stateGroupTwoDescription;
						orgFiveLinkText.innerHTML = WI.stateGroupTwoTitle;
						orgFiveLink.href = WI.stateGroupTwoLink;
					}
					else if(result.state === 'WI' && result.ideology === 'none') {
						orgTwoTitle.innerHTML = WI.stateGroupTwoTitle;
						orgTwoDescription.innerHTML = WI.stateGroupTwoDescription;
						orgTwoLinkText.innerHTML = WI.stateGroupTwoTitle;
						orgTwoLink.href = WI.stateGroupTwoLink;
					}
					
					// Display Org Three - related to school age children
					if(result.state === 'WI' && result.school === 'yes' && result.ideology !== 'conservative') {
						orgThreeTitle.innerHTML = WI.school.yesSchoolGroupTitle;
						orgThreeDescription.innerHTML = WI.school.yesSchoolGroupDescription;
						orgThreeLinkText.innerHTML = WI.school.yesSchoolGroupTitle;
						orgThreeLink.href = WI.school.yesSchoolGroupLink;
					}
					
					// Display Org Four - related to ethnicity
					if(result.state === 'WI' && result.ethnicity === 'hispanic' && result.ideology !== 'conservative') {
						orgFourTitle.innerHTML = WI.ethnicity.hispanicGroupTitle;
						orgFourDescription.innerHTML = WI.ethnicity.hispanicGroupDescription;
						orgFourLinkText.innerHTML = WI.ethnicity.hispanicGroupTitle;
						orgFourLink.href = WI.ethnicity.hispanicGroupLink;
					}
					else if(result.state === 'WI' && result.ethnicity === 'african american' && result.ideology !== 'conservative') {
						orgFourTitle.innerHTML = WI.ethnicity.africanAmericanGroupTitle;
						orgFourDescription.innerHTML = WI.ethnicity.africanAmericanGroupDescription;
						orgFourLinkText.innerHTML = WI.ethnicity.africanAmericanGroupTitle;
						orgFourLink.href = WI.ethnicity.africanAmericanGroupLink;
					}
					
					// Display Org Five - related to faith
					if(result.state === 'WI' && result.faith === 'yes' && result.ideology !== 'conservative') {
						orgFiveTitle.innerHTML = WI.faith.yesFaithGroupTitle;
						orgFiveDescription.innerHTML = WI.faith.yesFaithGroupDescription;
						orgFiveLinkText.innerHTML = WI.faith.yesFaithGroupTitle;
						orgFiveLink.href = WI.faith.yesFaithGroupLink;
					}
				}
			}, 500);
		});	
	}
}, 1500);