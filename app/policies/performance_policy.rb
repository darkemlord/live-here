class PerformancePolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def index?
    true
  end

  def home?
    true
  end

  def show?
    return true
  end

  def create?
    return true
  end

end
