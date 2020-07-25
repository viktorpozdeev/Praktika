
let store = {
    _state: {
        NotesPage: {
            Notes: [
                {id: 4, name: "Продукуты", values: "Купить покушать"},
                {id: 3, name: "Быстрикова экзамен", values: "Сдать Экзамен"},
                {id: 2, name: "Список задач", values: "Поотжиматься и почилить"},
                {id: 1, name: "Планы", values: "Выучить React.js"}
            ],
            NameNotesTemp: '',
            StyleModal: {
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(68,68,68,0.65)'
                }
            }
        },
        ProfilePage: {
            Posts: [
                {id: 1,  values: "всее чиил",urlImg:'https://images4.alphacoders.com/921/thumb-1920-921846.jpg',  likeCount: 23}
            ],
            textUpdate: '',
            textImglink:'',
            StyleModal: {
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(68,68,68,0.65)'
                }
            }
        }
    },
    dispatch (action) {
        if(action.type === 'ADD-NOTES') {
            let item = {id: action.id, name: "Новая заметка", values: ""};
            this._state.NotesPage.Notes.unshift(item);
            this._reRender();
            debugger;
        }else if(action.type === 'DETECTED-NEW-ID-NOTE'){
            let temp = this._state.NotesPage.Notes[0].id + 1;
            debugger;
            return temp;

        }else if(action.type === 'DELETE-NOTES'){
            let i;
            this._state.NotesPage.Notes.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            this._state.NotesPage.Notes.splice(i, 1);
            this._reRender();
        }else if(action.type === 'DETECT-NOTES'){
            let i;
            this._state.NotesPage.Notes.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            return i;
        }else if(action.type === 'UPDATE-NOTES'){
            this._state.NotesPage.Notes[action.template].values = action.text;
            this._reRender();
        }else if(action.type === 'UPDATE-NOTES-NAME'){
            this._state.NotesPage.Notes[action.template].name = action.text;
            this._reRender();
        }else if (action.type === 'UPDATE-TEXTAREA-POST'){
            this._state.ProfilePage.textUpdate = action.text;
            this._reRender()
        }else if (action.type === 'UPDATE-TEXTAREA-POST-IMG'){
            this._state.ProfilePage.textImglink = action.text;
            this._reRender()
        }else if (action.type === 'ADD-POST'){
            let temp = this._state.ProfilePage.Posts[0].id + 1;
            let item = {id: temp,  values: this._state.ProfilePage.textUpdate ,urlImg: this._state.ProfilePage.textImglink, likeCount: 0};
            this._state.ProfilePage.Posts.unshift(item);
            this._state.ProfilePage.textUpdate = '';
            this._state.ProfilePage.textImglink = '';
            debugger;
            this._reRender();
        }else if(action.type === 'DELETE-POST'){
            let i;
            this._state.ProfilePage.Posts.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            this._state.ProfilePage.Posts.splice(i, 1);
            this._reRender();
        }else if(action.type === 'DETECT-POST'){
            let i;
            this._state.ProfilePage.Posts.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            return i;
        }else if(action.type === 'UPDATE-POST'){
            this._state.ProfilePage.Posts[action.template].values = action.text;
            this._reRender();
        }else if(action.type === 'LIKE-POST-PLUS'){
            debugger;
            this._state.ProfilePage.Posts[action.template].likeCount++;
            this._reRender();
        }else if(action.type === 'LIKE-POST-MINUS'){
            this._state.ProfilePage.Posts[action.template].likeCount--;
            this._reRender();
        }
    },


    getState(){
        return this._state;
    },
    _reRender: "",
    subscribe(renderAll) {
       this._reRender = renderAll;
    }
};

export default store;