class ContentManagementSystem {
    constructor() {
        this.contents = [];
    }

    addContent(title, body) {
        const content = {
            id: this.contents.length + 1,
            title: title,
            body: body,
            createdAt: new Date()
        };
        this.contents.push(content);
        return content;
    }

    getContent(id) {
        return this.contents.find(content => content.id === id);
    }

    updateContent(id, newTitle, newBody) {
        const content = this.getContent(id);
        if (content) {
            content.title = newTitle;
            content.body = newBody;
            return content;
        }
        return null;
    }

    deleteContent(id) {
        const index = this.contents.findIndex(content => content.id === id);
        if (index !== -1) {
            return this.contents.splice(index, 1)[0];
        }
        return null;
    }

    listContents() {
        return this.contents;
    }
}

// Example usage
const cms = new ContentManagementSystem();
cms.addContent("First Post", "This is the body of the first post.");
cms.addContent("Second Post", "This is the body of the second post.");
console.log(cms.listContents());
const content = cms.getContent(1);
console.log(content);
cms.updateContent(1, "Updated First Post", "Updated body of the first post.");
console.log(cms.getContent(1));
cms.deleteContent(2);
console.log(cms.listContents());
