import gql from 'graphql-tag';
import axios from 'axios';
import uuid from 'uuid';
import remove from 'lodash/remove';
import omit from 'lodash/omit';
import split from 'lodash/split';
export function state () {
  return {
    data: [],
    blogs: [],
  }
}
export const mutations = {
  setdata(state, data) {
    state.data = data;
  },
  setblog(state, blogs) {
    state.blogs = blogs;
  },
  addblog(state, blog) {
    state.blogs = [ ...state.blogs, blog ];
  },
  editblog(state, blog) {
    state.blogs = state.blogs.map(o => {
      if (o.id = blog.id) {
        return {
          ...blog,
          updated: new Date(),
        }
      } else {
        return o;
      }
    });
  },
  deleteblog(state, id) {
    state.blogs = remove(state.blogs, o => { return o.id !== id});
  }
};
export const actions =  {
  async editblog({ commit }, blog) {
    if ( blog.id) {
      // const value = {...blog, tags: split(blog.string_tags, '')}
      await axios.patch(`https://todos-cuvsmolowg.now.sh/todos/${blog.id}`, omit(blog, ['id']));
      commit('editblog', blog);
    } else {
      const value = {
        ...blog,
        id: uuid(),
        comment: [],
        created: new Date(),
        updated: new Date(),
        viewed: 0,
        tags: split(blog.string_tags, ','),
      };
      const res = await axios.post(`https://todos-cuvsmolowg.now.sh/todos`, value);
      commit('addblog', res.data);
    }
  },
  async deleteblog({ commit }, id) {
    await axios.delete(`https://todos-cuvsmolowg.now.sh/todos/${id}`);
    commit('deleteblog', id);
  },
  async nuxtServerInit ({ commit }, context) {
    // const postsQuery = gql`
    //   query {
    //     categories {
    //       id,
    //       name,
    //       created,
    //       image,
    //       updated,
    //       description,
    //       status,
    //       content,
    //     }
    //   }
    // `;
    // let client = context.app.apolloProvider.defaultClient;
    // await client.query({ query: postsQuery })
    //   .then((res) => res.data)
    // .then(data => {
    //   commit('setCategories', data.categories);
    // });
    const res = await axios.get('https://todos-cuvsmolowg.now.sh/todos');
    commit('setblog', res.data)
  },
}
