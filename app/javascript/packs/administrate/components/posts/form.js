import React from 'react';
import Input from '../input';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import _ from 'lodash';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    _.bindAll(this, 'updateEditorState');
    const raw = props.post.get('raw_body');
    if(_.isEmpty(raw)) {
      this.state = {editorState: EditorState.createEmpty()};
    } else {
      let contentState = convertFromRaw(JSON.parse(raw));
      this.state = {editorState: EditorState.createWithContent(contentState)};
    }
  }

  updateEditorState(editorState) {
    const {setPost, post} = this.props;
    this.setState({editorState});
    let raw = convertToRaw(editorState.getCurrentContent());
    let newPost = post.set('raw_body', JSON.stringify(raw));
    setPost(newPost);
  }



  render() {
    let {editorState} = this.state;
    const {post, setPost, action, errors, title } = this.props;
    const update = (value, field) => {
      const newPost = post.set(field, value);
      setPost(newPost);
    }
    let options = {
        options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign',
          'link', 'embedded', 'emoji', 'image', 'remove', 'history']
      }
    return(
      <form onSubmit={action}>
        <fieldset>
          <Input
            title='Название'
            update={update}
            errors={errors}
            object={post}
            field='title'
          />
          <Input
            title='Краткое описание'
            update={update}
            errors={errors}
            object={post}
            field='preview'
          />
          <label>Изображение(1080x650)</label>
          <input type="file"
            onChange={(e)=> update(e.target.files[0], 'cover')}
          />
          {errors.has('cover') &&
            <span className='input-error'>{errors.get('cover').first()}</span>
          }

          <Editor
            editorState={editorState}
            onEditorStateChange={this.updateEditorState}
            toolbar={options}
          />
          <hr/>
          <input className="button-primary" type="submit" value={title}/>
        </fieldset>
      </form>

    )
  }
}
