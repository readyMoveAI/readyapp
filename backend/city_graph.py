from langgraph.graph import START, END, StateGraph
from langgraph.checkpoint.memory import MemorySaver
from langchain_core.messages import SystemMessage
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
from state_classes import CityState, NeighborhoodList

load_dotenv()

llm = ChatOpenAI(model="gpt-4o", temperature=0) 

city_search_instructions = SystemMessage(content=f"""You will be given a city or area that a user wants to move to.
                                           
Your instructions are to generate a list of 3 potential neighborhoods in that city.  Return the list of neighborhoods as a comma separated list.
                                           
For each neighborhood, include the name of the neighborhood, the city it is in, and the state it is in.  For example, "Mission District, San Francisco, CA" or "Noe Valley, San Francisco, CA" or "Nob Hill, San Francisco, CA"

In addition, include 3 common tasks a user would need to perform to successfully move to that neighborhood.  For example, "Find a job", "Find a place to live", "Find a doctor", "Find a school for my children", etc.

Return the list of neighborhoods and tasks as a comma separated list.  For example, "Mission District, San Francisco, CA: Find a job, Find a place to live, Find a doctor""")


def generate_city_list(state: CityState):

    """ Generate a list of neighborhoods and tasks for a user to move to a city """

    structured_llm = llm.with_structured_output(NeighborhoodList)
    search_results = structured_llm.invoke([city_search_instructions]+[state['destination']])

    return {"neighborhood_list": [search_results]}

city_builder = StateGraph(CityState)

city_builder.add_node("generate_city_list", generate_city_list)

city_builder.add_edge(START, "generate_city_list")
city_builder.add_edge("generate_city_list", END)

memory = MemorySaver()

city_graph = city_builder.compile(checkpointer=memory)