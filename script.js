function showYesPage() {
    document.getElementById('startContainer').style.display = 'none';
    document.getElementById('yesPage').style.display = 'block';
    document.getElementById('noPage').style.display = 'none';
}

function showNoPage() {
    document.getElementById('startContainer').style.display = 'none';
    document.getElementById('yesPage').style.display = 'none';
    document.getElementById('noPage').style.display = 'block';
    document.getElementById('chooseWiselyMessage').style.display = 'block';
    document.getElementById('chooseWiselyPhoto').style.display = 'block';
}

function backToYesNo() {
    document.getElementById('startContainer').style.display = 'block';
    document.getElementById('yesPage').style.display = 'none';
    document.getElementById('noPage').style.display = 'none';
    document.getElementById('chooseWiselyMessage').style.display = 'none';
    document.getElementById('chooseWiselyPhoto').style.display = 'none';
}
