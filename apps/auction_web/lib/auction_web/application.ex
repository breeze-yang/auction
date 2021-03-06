defmodule AuctionWeb.Application do
  use Application

  alias AuctionWeb.Auction.AuctionSupervisor

  def start(_type, _args) do
    import Supervisor.Spec

    # AuctionServer.start_link

    # Define workers and child supervisors to be supervised
    children = [
      # Start the endpoint when the application starts
      supervisor(AuctionWeb.Endpoint, []),
      # Start your own worker by calling: AuctionWeb.Worker.start_link(arg1, arg2, arg3)
      # worker(AuctionWeb.Worker, [arg1, arg2, arg3]),
      worker(AuctionSupervisor, [])
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: AuctionWeb.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    AuctionWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
