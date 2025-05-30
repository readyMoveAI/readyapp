from flask import Flask, request, jsonify
from flask_cors import CORS
from city_graph import city_graph

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_ready():
    return "HELLO READY"

@app.route('/api/generate_neighborhood_list', methods=['GET'])
def generate_neighborhood_list():


    destination = request.args.get('destination', 'Washington, DC')

    thread = {"configurable": {"thread_id": "1"}}
    result = city_graph.invoke({"destination": destination}, thread)

    neighborhood_list = result['neighborhood_list'][0]

    return jsonify({
        "neighborhoods": [
            {
                "name": neighborhood.name,
                "tasks": [{"description": task.description} for task in neighborhood.tasks]
            }
            for neighborhood in neighborhood_list.neighborhoods
        ]
    })

if __name__ == '__main__':
    app.run(debug=True)
