function WebmailViewModel() {
    // Data
    var self = this;
    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.chosenFolderId = ko.observable();
    self.chosenFolderData = ko.observable();
    self.chosenMailData = ko.observable();
    
    
    self.goToFolder = function(folder) { location.hash = folder };
self.goToMail = function(mail) { location.hash = mail.folder + '/' + mail.id };
    
/*    self.goToFolder = function(folder) { self.chosenFolderId(folder); 
        self.chosenMailData(null);
        $.get('/mail', { folder: folder }, self.chosenFolderData);
    };
    self.goToMail = function(mail) { 
        self.chosenFolderId(mail.folder);
        self.chosenFolderData(null); // Stop showing a folder
        $.get("/mail", { mailId: mail.id }, self.chosenMailData);
    }; */
    self.goToFolder('Inbox');
    
    
        Sammy(function() {
        this.get('#:folder', function() {
            self.chosenFolderId(this.params.folder);
            self.chosenMailData(null);
            $.get("/mail", { folder: this.params.folder }, self.chosenFolderData);
        });

        this.get('#:folder/:mailId', function() {
            self.chosenFolderId(this.params.folder);
            self.chosenFolderData(null);
            $.get("/mail", { mailId: this.params.mailId }, self.chosenMailData);
        });
        this.get('', function() { this.app.runRoute('get', '#Inbox') });
    }).run();
};

ko.applyBindings(new WebmailViewModel());


// http://learn.knockoutjs.com/WebmailExampleStandalone.html
// finished version to look at function WebmailViewModel() {
    // Data
    var self = this;
    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.chosenFolderId = ko.observable();
    self.chosenFolderData = ko.observable();
    self.chosenMailData = ko.observable();
    
    
    self.goToFolder = function(folder) { location.hash = folder };
self.goToMail = function(mail) { location.hash = mail.folder + '/' + mail.id };
    
/*    self.goToFolder = function(folder) { self.chosenFolderId(folder); 
        self.chosenMailData(null);
        $.get('/mail', { folder: folder }, self.chosenFolderData);
    };
    self.goToMail = function(mail) { 
        self.chosenFolderId(mail.folder);
        self.chosenFolderData(null); // Stop showing a folder
        $.get("/mail", { mailId: mail.id }, self.chosenMailData);
    }; */
    self.goToFolder('Inbox');
    
    
        Sammy(function() {
        this.get('#:folder', function() {
            self.chosenFolderId(this.params.folder);
            self.chosenMailData(null);
            $.get("/mail", { folder: this.params.folder }, self.chosenFolderData);
        });

        this.get('#:folder/:mailId', function() {
            self.chosenFolderId(this.params.folder);
            self.chosenFolderData(null);
            $.get("/mail", { mailId: this.params.mailId }, self.chosenMailData);
        });
        this.get('', function() { this.app.runRoute('get', '#Inbox') });
    }).run();
};

ko.applyBindings(new WebmailViewModel());


// http://learn.knockoutjs.com/WebmailExampleStandalone.html
// finished version to look at 