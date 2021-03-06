$(document).ready(()=>{
    loaderFadeOut();

    $('.tab').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass("active");
    })

    $(".sidebarBtn").click(function(){
        $("#sidebar").toggleClass('active');
        $(".shadow-wrapper").toggleClass('active');
        $(".container-fluid").toggleClass('position-fixed');
    });

    $(".shadow-wrapper").click(function(){
        $("#sidebar").toggleClass('active');
        $(".shadow-wrapper").toggleClass('active');
        setTimeout(function () {
            $(".container-fluid").removeClass('position-fixed');
        },400);
        
    })
})

function loaderFadeOut() {
    $(".loader-wrapper").hide();
}

function openTab(tab) {
    $('.tabcontent').hide();
    $(tab).fadeIn('slow');
}

function sendToTester() {
    $.confirm({
        title: 'Send this data to Tester',
        columnClass: 'col-md-6 col-sm-12',
        content: `
        <div class="col-12">
            <span class="info-title">Batch No</span>
            <span class="info-value">24824E9</span>
        </div>
        <br>
        <div class="col-12">
            <span class="info-title">Batch No</span>
            <span class="info-value">55212E2</span>
        </div>
        `,
        type: 'green',
        animation: 'top',
        closeAnimation: 'bottom',
        onOpenBefore: function () {
            $(".jconfirm-buttons").addClass("form-row col-12 pl-0 pr-0");
        },
        // autoClose: 'Cancel|8000',
        buttons: {
            Cancel: {
                text: 'Cancel',
                btnClass: 'btn btn-default col',
                action: close()
            },
            Send: {
                text: 'Send',
                btnClass: 'btn btn-green col',
                action: function () {
                    $.dialog({
                        title: 'Sent to Tested',
                        columnClass: 'col-6',
                        type: 'green',
                        animation: 'top',
                        closeAnimation: 'top',
                        backgroundDismiss: true,
                        content:  `Record sent, redirect to sample list page`,
                        onOpen: function () {
                            var self = this;
                            setTimeout(function () {
                                self.close();
                                location.href="sampleList.html"
                            }, 1500);
                        },
                        
                    });
                    
                }
            }
        }
    });
}

function saveTest(batchNo) {
    if (batchNo == '') {
        batchNo = 'N/A';
    }
    $.dialog({
        title: 'Saved Test',
        columnClass: 'col-md-6 col-sm-12',
        content: `
        <div class="row">
        <div class="col-12">
            <span class="info-title">Batch No</span>
            <span class="info-value">` + batchNo + `</span>
        </div>
        </div>
        
        `,
        type: 'green',
        animation: 'top',
        closeAnimation: 'top',
        backgroundDismiss: true,
        onOpen: function () {
            $("#statusText").empty();
            $("#statusText").append("Pending for send")
            var self = this;
            setTimeout(function () {
                self.close();
                window.scrollTo(0, 0); 
            }, 600);
        },
        
    });
}

function issueCred() {
    $.confirm({
        title: 'Issue Credential',
        columnClass: 'col-md-6 col-sm-12',
        content: `
        <div class="row">
            <div class="col-6 mb-4">
                <span class="info-title">Full Name</span>
                <span class="info-value">Bernadette</span>
            </div>
            <div class="col-6 mb-4">
                <span class="info-title">HKID</span>
                <span class="info-value">A1234567(2)</span>
            </div>
            <div class="col-4">
            <span class="info-title">PCR</span>
            <span class="info-value">+ Positive</span>
        </div>
        <div class="col-4">
            <span class="info-title">IgG</span>
            <span class="info-value">+ Positive</span>
        </div>
        <div class="col-4">
            <span class="info-title">IgM</span>
            <span class="info-value">- Negative</span>
        </div>
        </div>
        

       
        `,
        type: 'green',
        animation: 'top',
        closeAnimation: 'bottom',
        onOpenBefore: function () {
            $(".jconfirm-buttons").addClass("form-row col-12 pl-0 pr-0");
        },
        // autoClose: 'Cancel|8000',
        buttons: {
            Cancel: {
                text: 'Cancel',
                btnClass: 'btn btn-default col',
                action: close()
            },
            Send: {
                text: 'Issue',
                btnClass: 'btn btn-green col',
                action: function () {
                    $.dialog({
                        title: 'Credential Issued',
                        columnClass: 'col-6',
                        type: 'green',
                        animation: 'top',
                        closeAnimation: 'top',
                        backgroundDismiss: true,
                        content:  `Credential Issued, redirect to sample list page`,
                        onOpen: function () {
                            var self = this;
                            setTimeout(function () {
                                self.close();
                                location.href="sampleList.html"
                            }, 1500);
                        },
                        
                    });
                    
                }
            }
        }
    });
}

function issueCredBatch() {
    $.confirm({
        title: 'Issue Credential',
        columnClass: 'col-md-6 col-sm-12',
        content: `
        <div class="row">
            <div class="col-6 mb-4">
                <span class="info-title">Full Name</span>
                <span class="info-value">Bernadette</span>
            </div>
            <div class="col-6 mb-4">
                <span class="info-title">HKID</span>
                <span class="info-value">A1234567(2)</span>
            </div>

            <div class="col-6 mb-4">
                <span class="info-title">Full Name</span>
                <span class="info-value">Howard</span>
            </div>
            <div class="col-6 mb-4">
                <span class="info-title">HKID</span>
                <span class="info-value">A1234567(6)</span>
            </div>
            
        </div>
        

       
        `,
        type: 'green',
        animation: 'top',
        closeAnimation: 'bottom',
        onOpenBefore: function () {
            $(".jconfirm-buttons").addClass("form-row col-12 pl-0 pr-0");
        },
        // autoClose: 'Cancel|8000',
        buttons: {
            Cancel: {
                text: 'Cancel',
                btnClass: 'btn btn-default col',
                action: close()
            },
            Send: {
                text: 'Issue',
                btnClass: 'btn btn-green col',
                action: function () {
                    $.dialog({
                        title: 'Credential Issued',
                        columnClass: 'col-6',
                        type: 'green',
                        animation: 'top',
                        closeAnimation: 'top',
                        backgroundDismiss: true,
                        content:  `Credential Issued, redirect to sample list page`,
                        onOpen: function () {
                            var self = this;
                            setTimeout(function () {
                                self.close();
                                location.href="sampleList.html"
                            }, 1500);
                        },
                        
                    });
                    
                }
            }
        }
    });
}