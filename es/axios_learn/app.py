import copy
from flask import Flask, jsonify
from flask import Response
from flask import render_template


response_dict = {
  'data': {},
  'status': 200,
  'msg': 'OK',
}


class JsonResponse(Response):
    @classmethod
    def force_type(cls, response, environ=None):
        if isinstance(response, (list, dict)):
            response = jsonify(response)
        return super(Response, cls).force_type(response, environ)


class JsonFlask(Flask):
    response_class = JsonResponse


app = JsonFlask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/users/<int:user_id>')
def users_get_by_id(user_id):
    response = copy.copy(response_dict)
    response['data'] = user_id
    return response


if __name__ == '__main__':
    app.run(host='127.0.0.1', debug=True)